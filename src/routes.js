import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AlumniPage } from './pages/AlumniPage';
import { TeamsPage } from './pages/TeamsPage';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default AppRoutes;