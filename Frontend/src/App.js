import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './views/Login';
import Registration from './views/Registration';
import Dashboard from './views/Dashboard';
import LetterReception from './views/Letters';
import RequestForm from './views/RequestForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/register" element={ <Registration />} />
        <Route exact path="/dashboard" element={ <Dashboard />} />
        <Route exact path='/letter-reception' element = {<LetterReception />} />
        <Route exact path="/requests" element={ <RequestForm />} />

      </Routes>
    </Router>
  );
}

export default App;
