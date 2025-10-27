// =============================================
// Action Routes
// =============================================

const express = require('express');
const router = express.Router();
const {
    getAllActions,
    getActionsByReport,
    createAction,
    getActionById
} = require('../controllers/actionController');

router.get('/', getAllActions);
router.get('/report/:reportId', getActionsByReport);
router.get('/:id', getActionById);
router.post('/', createAction);

module.exports = router;