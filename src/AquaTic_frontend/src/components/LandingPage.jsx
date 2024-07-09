// src/components/LandingPage.jsx
import React from 'react';
import { ConnectButton, ConnectDialog, useConnect } from '@connect2ic/react';
import '@connect2ic/core/style.css';
import logo from '../../public/NovaPal.png';

const LandingPage = ({ onEnter }) => {
  const { isConnected } = useConnect();

  return (
    <div className="landing-page container text-center">
      <img src={logo} alt="NovaPal" className="logo" />
      <h1>Bienvenido a NovaPal</h1>
      <p>Monitorea y gestiona los datos de calidad del agua de manera eficiente.</p>
      <ConnectButton className="btn btn-primary mt-3" />
      {isConnected && (
        <button className="btn btn-success mt-3" onClick={onEnter}>
          Entrar
        </button>
      )}
      <ConnectDialog />
    </div>
  );
};

export default LandingPage;