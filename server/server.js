const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Set your desired port number
const db = require('./models'); // Import the entire database models

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);
const letterRoutes = require('./routes/letters');
app.use('/api/letters', letterRoutes);
const requestRoutes = require('./routes/requests');
app.use('/api/requests', requestRoutes);




// Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
  // Sync the database models with the actual database
  db.sequelize.sync()
    .then(() => {
      console.log('Database connection established');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });
});
