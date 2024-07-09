// src/AppRoutes.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useConnect } from '@connect2ic/react';
import { useUser } from './UserContext';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Navbar from './components/Navbar';

function AppRoutes() {
  const { isConnected, principal } = useConnect();
  const { setPrincipal } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isConnected && principal) {
      setPrincipal(principal);
      navigate('/home');
    }
    if (!isConnected && location.pathname !== '/') {
      navigate('/');
    }
  }, [isConnected, principal, setPrincipal, navigate, location]);

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage onEnter={() => navigate('/home')} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default AppRoutes;