import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './views/Login';
import Registration from './views/Registration';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Router>
      <nav>
        <Link to= '/'> Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/register" element={ <Registration />} />
        <Route exact path="/dashboard" element={ <Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
