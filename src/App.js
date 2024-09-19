import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
