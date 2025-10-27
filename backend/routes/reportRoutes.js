// =============================================
// Report Routes
// =============================================

const express = require('express');
const router = express.Router();
const {
    getAllReports,
    getReportById,
    createReport,
    updateReportStatus,
    deleteReport,
    getReportsByStatus,
    getReportStats
} = require('../controllers/reportController');

// GET routes
router.get('/', getAllReports);
router.get('/stats', getReportStats);
router.get('/status/:status', getReportsByStatus);
router.get('/:id', getReportById);

// POST routes
router.post('/', createReport);

// PUT routes
router.put('/:id', updateReportStatus);

// DELETE routes
router.delete('/:id', deleteReport);

module.exports = router;