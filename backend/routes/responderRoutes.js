const express = require('express');
const router = express.Router();
const {
    getAllResponders,
    getResponderById,
    createResponder
} = require('../controllers/responderController');

router.get('/', getAllResponders);
router.get('/:id', getResponderById);
router.post('/', createResponder);

module.exports = router;