const express = require('express');
const router = express.Router();

// Import the controller functions for user registration and login
const { registerUser, loginUser } = require('../controllers/users');

// Define the routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Export the router
module.exports = router;
