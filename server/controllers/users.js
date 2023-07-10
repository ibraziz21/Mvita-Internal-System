const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users} = require('../models');

// Function to handle user registration
const registerUser = (req, res) => {
  // Extract the user data from the request body
  const { name, email, jobDescription, phoneNumber, password } = req.body;

  // Perform any necessary validation of the user data
  if (!name || !email || !jobDescription || !phoneNumber || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Generate a salt and hash the user's password using bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return res.status(500).json({ error: 'An error occurred during registration' });
    }

    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred during registration' });
      }

      // Create a new user record in the database
      Users.create({
        name,
        email,
        jobDescription,
        phoneNumber,
        password: hash,
      })
        .then(() => {
          // Return a response indicating successful registration
          res.status(200).json({ message: 'Registration successful' });
        })
        .catch((error) => {
          // Handle database errors
          console.error('Error:', error);
          res.status(500).json({ error: 'An error occurred during registration' });
        });
    });
  });
};

// Function to handle user login
const loginUser = (req, res) => {
  // Extract the user data from the request body
  const { email, password } = req.body;

  // Perform any necessary validation of the user data
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Find the user record in the database
  Users.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Compare the provided password with the stored hashed password using bcrypt
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ error: 'An error occurred during login' });
        }

        if (!isMatch) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate a JWT token upon successful login
        const token = jwt.sign({ userId: user.id }, 'your_secret_key'); // Replace 'your_secret_key' with your own secret key

        // Return the JWT token as the response
        res.status(200).json({ token });
      });
    })
    .catch((error) => {
      // Handle database errors
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    });
};

// Function to get user details
const getUser = (req, res) => {
  // Extract the user ID from the request parameters or JWT token
  const userId = req.params.id || req.user.userId;

  // Find the user record in the database
  Users.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
        }

        // Return the user details as the response
        res.status(200).json({ user });
      })
      .catch((error) => {
        // Handle database errors
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while retrieving user details' });
      });
  };


// Function to update user details
const updateUser = (req, res) => {
  // Extract the user ID from the request parameters or JWT token
  const userId = req.params.id || req.user.userId;

  // Extract the updated user data from the request body
  const { name, email, jobDescription, phoneNumber } = req.body;

  // Find the user record in the database
  Users.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update the user details
      user.name = name || user.name;
      user.email = email || user.email;
      user.jobDescription = jobDescription || user.jobDescription;
      user.phoneNumber = phoneNumber || user.phoneNumber;

      // Save the updated user record
      user.save()
        .then(() => {
          // Return a response indicating successful update
          res.status(200).json({ message: 'User details updated successfully' });
        })
        .catch((error) => {
          // Handle database errors
          console.error('Error:', error);
          res.status(500).json({ error: 'An error occurred while updating user details' });
        });
    })
    .catch((error) => {
      // Handle database errors
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while retrieving user details' });
    });
};

// Function to delete a user
const deleteUser = (req, res) => {
  // Extract the user ID from the request parameters or JWT token
  const userId = req.params.id || req.user.userId;

  // Find the user record in the database
  Users.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Delete the user record
      user.destroy()
        .then(() => {
          // Return a response indicating successful deletion
          res.status(200).json({ message: 'User deleted successfully' });
        })
        .catch((error) => {
          // Handle database errors
          console.error('Error:', error);
          res.status(500).json({ error: 'An error occurred while deleting user' });
        });
    })
    .catch((error) => {
      // Handle database errors
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while retrieving user details' });
    });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
};
