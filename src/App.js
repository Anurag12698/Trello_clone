import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Optional, if created
import HomePage from './components/Body';
import About from './components/About'; // Optional, if created
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
