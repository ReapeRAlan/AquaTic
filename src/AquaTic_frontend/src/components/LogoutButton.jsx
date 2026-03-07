// src/components/LogoutButton.jsx
import React from "react";
import { useConnect } from "@connect2ic/react";
import "@connect2ic/core/style.css";

const LogoutButton = () => {
  const { disconnect } = useConnect();

  return (
    <button
      className="btn btn-danger logout-button"
      onClick={disconnect}
      aria-label="Logout"
    >
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
