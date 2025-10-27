// =============================================
// Category Controller
// =============================================

const db = require('../config/db');

// Get all categories
exports.getAllCategories = async (req, res, next) => {
    try {
        const [categories] = await db.query(`
            SELECT 
                c.*,
                COUNT(r.ReportID) AS ReportCount
            FROM categories c
            LEFT JOIN reports r ON c.CategoryID = r.CategoryID
            GROUP BY c.CategoryID
            ORDER BY c.Name
        `);
        
        res.status(200).json({
            status: 'success',
            results: categories.length,
            data: categories
        });
    } catch (error) {
        console.error('Error in getAllCategories:', error);
        next(error);
    }
};

// Get category by ID
exports.getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const [categories] = await db.query(`
            SELECT * FROM categories WHERE CategoryID = ?
        `, [id]);
        
        if (categories.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Category not found'
            });
        }
        
        res.status(200).json({
            status: 'success',
            data: categories[0]
        });
    } catch (error) {
        console.error('Error in getCategoryById:', error);
        next(error);
    }
};

// Create new category
exports.createCategory = async (req, res, next) => {
    try {
        const { name, role, contactInfo } = req.body;
        
        if (!name || !role) {
            return res.status(400).json({
                status: 'error',
                message: 'Name and Role are required'
            });
        }
        
        const [result] = await db.query(`
            INSERT INTO categories (Name, Role, ContactInfo)
            VALUES (?, ?, ?)
        `, [name, role, contactInfo]);
        
        const [newCategory] = await db.query(
            'SELECT * FROM categories WHERE CategoryID = ?',
            [result.insertId]
        );
        
        res.status(201).json({
            status: 'success',
            message: 'Category created successfully',
            data: newCategory[0]
        });
    } catch (error) {
        console.error('Error in createCategory:', error);
        next(error);
    }
};