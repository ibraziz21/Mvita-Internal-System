const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Set your desired port number
const db = require('./models/User'); // Import the database models
const Letters = require('./models/Letter');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);


const lettersRoutes = require('./routes/letters');
app.use('/api/letters', lettersRoutes);

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

    Letters.sequelize.sync() // Set force: true to drop and recreate the tables on every server restart
  .then(() => {
    console.log('Database connection established');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
});
