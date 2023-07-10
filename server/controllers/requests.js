const { Voters, Requests } = require('../models'); // Import the Voter and Request models

const submitRequest = async (req, res) => {
    const { name, idNumber, ward, docket, specificRequest } = req.body;
  
    try {
      // Check if the ID number exists in the voters table
      const voter = await Voters.findOne({
        where: {
          id_number: idNumber
        }
      });
  
      if (!voter) {
        return res.status(400).json({ message: 'Entered person is not a voter' });
      }
  
      // Save the request to the database
      const request = await Requests.create({
        name,
        id_number: idNumber,
        ward,
        docket,
        request: specificRequest
      });
  
      // Send a success response
      return res.status(200).json({ message: 'Request submitted successfully', request });
    } catch (error) {
      console.error('Error submitting request:', error);
      return res.status(500).json({ error: 'Failed to submit request' });
    }
  };
  

module.exports = {
  submitRequest
};
