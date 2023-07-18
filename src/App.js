import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage/homepage.component';
import About from './pages/AboutPage/aboutpage.component';
import Logement from './pages/LogementPage/logementpage.component';
import ErrorPage from './pages/ErrorPage/errorpage.component';

import './sass/main.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/A-Propos" element={<About />} />
          <Route path="/Fiche-Logement" element={<Logement />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
