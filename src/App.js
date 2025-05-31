import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Club from './pages/masters/Club';

function App() {
    const [items, setItems] = useState([{
        title: "Progra Web",
        description: "Clase de los sabados"
    }]);

     return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={
          <div className="d-flex flex-column min-vh-100">
            <TopNavbar />

            <div
              className="flex-grow-1"
              style={{ marginLeft: '210px', marginTop: '60px',padding: '20px'}}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/club" element={<Club/>} />
              </Routes>
            </div>

            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;