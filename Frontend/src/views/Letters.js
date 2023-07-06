import React, { useState, useEffect } from 'react';
import './LetterReception.css';

function LetterReception() {
    const [senderName, setSenderName] = useState('');
    const [purpose, setPurpose] = useState('');
    const [letters, setLetters] = useState([]);
  
    useEffect(() => {
      fetchLetters();
    }, []);
  
    const fetchLetters = () => {
      fetch('/api/letters')
        .then((response) => response.json())
        .then((data) => {
          setLetters(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const letterData = {
          senderName,
          purpose,
          receivedDate: new Date().toISOString(),
        };
      
        fetch('/api/letters', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(letterData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Letter submitted:', data);
            // Clear form fields
            setSenderName('');
            setPurpose('');
            // Refresh letter entries
            fetchLetters();
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      

  return (
<div>
    <div className="letter-reception-container">
        <div className='letter-form-container'>
      <h2>Letter Reception</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Sender's Name:</label>
          <input type="text" value={senderName} onChange={(e) => setSenderName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Purpose:</label>
          <textarea
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Enter the purpose of the correspondence"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
      <div className="letters-list">
      <h3>Letters List</h3>
        <table className="letters-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sender</th>
              <th>Received Date</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {letters.map((letter) => (
              <tr key={letter.id}>
                <td>{letter.id}</td>
                <td>{letter.sender}</td>
                <td>{letter.receivedDate}</td>
                <td>{letter.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LetterReception;
