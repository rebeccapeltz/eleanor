import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Session from './pages/Session.jsx';
import Rules from './pages/Rules.jsx';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rules />} />
      <Route path="/session" element={<Session />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;