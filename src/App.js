import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Club from './pages/masters/Club';
import Factura from './pages/masters/Factura';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <TopNavbar />
        
        <div className="flex-grow-1" style={{ marginLeft: '210px', marginTop: '60px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/club" element={<Club />} />
            <Route path="/factura" element={<Factura />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
