import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RequestForm.css';


function RequestForm() {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [ward, setWard] = useState('');
  const [docket, setDocket] = useState('');
  const [specificRequest, setSpecificRequest] = useState('');
  const [errors, setErrors] = useState({});
  const [showErrorPopup, setShowErrorPopup] = useState(false); 
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const wardOptions = ['Majengo', 'Tononoka', 'Tudor', 'Ganjoni/Shimanzi', 'Old Town'];
  const docketOptions = ['Education', 'Empowerment', 'Sports Art Culture', 'Health'];

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Perform form validation
    const validationErrors = {};
  
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
  
    if (!idNumber.trim()) {
      validationErrors.idNumber = 'ID number is required';
    }
  
    if (!ward.trim()) {
      validationErrors.ward = 'Ward is required';
    }
  
    if (!docket.trim()) {
      validationErrors.docket = 'Docket is required';
    }
  
    // Add more validation rules for other fields
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    // Prepare the request data
    const requestData = {
      name,
      idNumber,
      ward,
      docket,
      specificRequest,
    };
  
    try {
      // Make the POST request to the backend API endpoint using fetch
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      // Parse the response as JSON
      const data = await response.json();
  
      // Handle the response from the backend
      if (data.success) {
        // Request submitted successfully, display success message or perform any necessary actions
        console.log('Request submitted successfully');
        // Clear form fields and errors after successful submission
        setName('');
        setIdNumber('');
        setWard('');
        setDocket('');
        setSpecificRequest('');
        setErrors({});
        // Redirect to the dashboard
        setShowSuccessPopup(true);
      } else {
        // Request submission failed, display error message or perform any necessary actions
        setShowErrorPopup(true);
        console.log('Request submission failed');
      }
    } catch (error) {
      // Error occurred during request submission, handle the error
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className="request-form-container">
      <h2>Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="idNumber">ID Number:</label>
          <input type="text" id="idNumber" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
          {errors.idNumber && <span className="error">{errors.idNumber}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="ward">Ward:</label>
          <select id="ward" value={ward} onChange={(e) => setWard(e.target.value)}>
            <option value="">Select Ward</option>
            {wardOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.ward && <span className="error">{errors.ward}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="docket">Docket:</label>
          <select id="docket" value={docket} onChange={(e) => setDocket(e.target.value)}>
            <option value="">Select Docket</option>
            {docketOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.docket && <span className="error">{errors.docket}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="specificRequest">Specific Request:</label>
          <textarea id="specificRequest" value={specificRequest} onChange={(e) => setSpecificRequest(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Error Popup */}
   {showErrorPopup && (
     <div className="error-popup">
     <div className="error-popup-content">
       <p className="error-popup-message">Entered person is not a voter</p>
       <button onClick={() => {
              setShowErrorPopup(false);
              navigate('/dashboard');
            }}>Close</button>
     </div>
   </div>
 )}

 {/* Success Popup */}
 {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-popup-content">
            <p className="success-popup-message">Request submitted successfully!</p>
            <button onClick={() => {
              setShowSuccessPopup(false);
              navigate('/dashboard');
            }}>
              Close and Go to Dashboard
            </button>
          </div>
        </div>
      )}
</div>

   

  );
}

export default RequestForm;
