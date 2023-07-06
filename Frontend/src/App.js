import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './views/Login';
import Registration from './views/Registration';
import Dashboard from './views/Dashboard';
import LetterReception from './views/Letters';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/register" element={ <Registration />} />
        <Route exact path="/dashboard" element={ <Dashboard />} />
        <Route exact path='/letter-reception' element = {<LetterReception />} />
      </Routes>
    </Router>
  );
}

export default App;
