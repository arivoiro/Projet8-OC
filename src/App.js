import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import Home from './pages/homepage/homepage.component';
import About from './pages/aboutpage/aboutpage.component';
import Logement from './pages/logementpage/logementpage.component';
import ErrorPage from './pages/errorpage/errorpage.component';

import './sass/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
