import React from 'react';
import {Link} from 'react-router-dom'
import { FaEnvelope, FaClipboardList, FaCalendarAlt, FaTruck } from 'react-icons/fa';
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="receptionist-dashboard">
      <h2 className="dashboard-heading">Receptionist Dashboard</h2>
      <div className="dashboard-cards">
        <Link to="/letter-reception" className="dashboard-card reception">
          <FaEnvelope className="card-icon" />
          <h3 className="card-title">Letter Reception</h3>
          <p className="card-description">Record and manage incoming letters</p>
        </Link>
        <Link to="/requests" className="dashboard-card requests">
          <FaClipboardList className="card-icon" />
          <h3 className="card-title">Requests to the Office</h3>
          <p className="card-description">Submit and track office requests</p>
        </Link>
        <Link to="/appointments" className="dashboard-card appointments">
          <FaCalendarAlt className="card-icon" />
          <h3 className="card-title">Appointments</h3>
          <p className="card-description">Manage and schedule appointments</p>
        </Link>
        <Link to="/delivery" className="dashboard-card delivery">
          <FaTruck className="card-icon" />
          <h3 className="card-title">Delivery Receptions</h3>
          <p className="card-description">Track and manage incoming deliveries</p>
        </Link>
      </div>
    </div>
  );

}

export default Dashboard;
