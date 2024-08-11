import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './components/HomePage';
import About from './components/About'; 
import Login from './components/Login';
import Workspace from './components/Workspace' ;
import MyTask from './components/MyTask';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/workspace" element={<Workspace />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/mytask" element={<MyTask /> } /> 
        </Routes>
        
        {location.pathname !== '/workspace' && location.pathname !== '/MyTask' && <Footer />}

      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}