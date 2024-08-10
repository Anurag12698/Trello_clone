import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './components/HomePage';
import About from './components/About'; 
import Login from './components/Login';
import Workspace from './components/Workspace' ;
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/workspace" element={<Workspace />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Footer /> 
        </div>
      </div>
    </Router>
  );
}

export default App;
