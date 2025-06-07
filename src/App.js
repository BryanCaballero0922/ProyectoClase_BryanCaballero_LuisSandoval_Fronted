import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Club from './pages/masters/Club';
import Factura from './pages/masters/Factura';
import Ofertas from './pages/masters/Ofertas';  // Importa tu nueva página Ofertas

function AppContent() {
  const location = useLocation();
  const mostrarLayout = location.pathname !== '/';

  return (
    <div className="d-flex flex-column min-vh-100">
      {mostrarLayout && <TopNavbar />}

      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/factura" element={<Factura />} />
          <Route path="/ofertas" element={<Ofertas />} />  {/* Nueva ruta añadida */}
        </Routes>
      </div>

      {mostrarLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

