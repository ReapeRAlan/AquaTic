// src/AppRoutes.jsx
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useConnect } from "@connect2ic/react";
import { useUser } from "./UserContext";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Graficas from "./components/Graficas";

function AppRoutes() {
  const { isConnected, principal } = useConnect();
  const { setPrincipal } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isConnected && principal) {
      setPrincipal(principal.toString());
      if (location.pathname === "/") {
        navigate("/home");
      }
    }
    if (!isConnected && location.pathname !== "/") {
      navigate("/");
    }
  }, [isConnected, principal, setPrincipal, navigate, location.pathname]);

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <main>
        <Routes>
          <Route
            path="/"
            element={<LandingPage onEnter={() => navigate("/home")} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/graficas" element={<Graficas />} />
        </Routes>
      </main>
    </>
  );
}

export default AppRoutes;
