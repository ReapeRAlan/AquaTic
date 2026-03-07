// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Connect2ICProvider } from "@connect2ic/react";
import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
import { UserProvider } from "./UserContext";
import AppRoutes from "./AppRoutes";
import "./index.scss";

const client = createClient({
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
});

function App() {
  return (
    <UserProvider>
      <Connect2ICProvider client={client}>
        <Router>
          <AppRoutes />
        </Router>
      </Connect2ICProvider>
    </UserProvider>
  );
}

export default App;
