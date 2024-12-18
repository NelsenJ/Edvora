import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Academy from './pages/Academy';
import KelasDetail from './pages/KelasDetail';  // Pastikan import benar
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />

        <div className="flex-grow-1 overflow-auto main-content" style={{height: "100vh" }}>
          <div className="top-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/academy/:id" element={<KelasDetail />} />  {/* Tambahkan route dengan parameter */}
            </Routes>
          </div>
          <div className="bottom-content">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;