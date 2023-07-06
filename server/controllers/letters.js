const Letter = require('../models/Letter');

const createLetter = async (req, res) => {
    try {
      const { senderName, purpose, receivedDate } = req.body;
  
      // Create a new letter
      const letter = await Letter.create({ senderName, purpose, receivedDate });
  
      res.status(201).json(letter);
    } catch (error) {
      console.error('Error creating letter:', error);
      res.status(500).json({ error: 'Failed to create letter' });
    }
  };

  const getAllLetters = async (req, res) => {
    try {
      // Retrieve all letters
      const letters = await Letter.findAll();
  
      res.status(200).json(letters);
    } catch (error) {
      console.error('Error retrieving letters:', error);
      res.status(500).json({ error: 'Failed to retrieve letters' });
    }
  };

  module.exports = {
    createLetter,
    getAllLetters,
  };
  