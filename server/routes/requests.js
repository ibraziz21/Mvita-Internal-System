const express = require('express');
const router = express.Router();
const { submitRequest } = require('../controllers/requests');

// POST /api/requests/submit - Submit a request
router.post('/', submitRequest);

module.exports = router;
