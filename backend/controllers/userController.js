// =============================================
// User Controller
// =============================================

const db = require('../config/db');

// Get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const [users] = await db.query(`
            SELECT 
                u.*,
                COUNT(r.ReportID) AS ReportCount
            FROM users u
            LEFT JOIN reports r ON u.UserID = r.UserID
            GROUP BY u.UserID
            ORDER BY u.Pseudonym
        `);
        
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: users
        });
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        next(error);
    }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const [users] = await db.query(
            'SELECT * FROM users WHERE UserID = ?',
            [id]
        );
        
        if (users.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }
        
        res.status(200).json({
            status: 'success',
            data: users[0]
        });
    } catch (error) {
        console.error('Error in getUserById:', error);
        next(error);
    }
};

// Create new user
exports.createUser = async (req, res, next) => {
    try {
        const { pseudonym, campusDept, optionalContact } = req.body;
        
        if (!pseudonym) {
            return res.status(400).json({
                status: 'error',
                message: 'Pseudonym is required'
            });
        }
        
        const [result] = await db.query(`
            INSERT INTO users (Pseudonym, CampusDept, OptionalContact)
            VALUES (?, ?, ?)
        `, [pseudonym, campusDept, optionalContact]);
        
        const [newUser] = await db.query(
            'SELECT * FROM users WHERE UserID = ?',
            [result.insertId]
        );
        
        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: newUser[0]
        });
    } catch (error) {
        console.error('Error in createUser:', error);
        next(error);
    }
};