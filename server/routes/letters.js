const express = require('express');
const router = express.Router();
const { createLetter, getAllLetters } = require('../controllers/letters');

router.post('/', createLetter);

router.get('/', getAllLetters);

module.exports = router;
