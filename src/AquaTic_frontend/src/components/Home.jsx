import React, { useState } from "react";
import ConsultarSensorData from "./ConsultarSensorData";
import EnviarSensorData from "./EnviarSensorData";
import { AquaTic_backend } from "declarations/AquaTic_backend";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [sensorData, setSensorData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await AquaTic_backend.fetchSensorData();
      const parsedResponse = JSON.parse(response); // Parsear la cadena JSON a un objeto
      setSensorData(parsedResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <h1 className="text-center">AquaTic Frontend</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Obtener Datos del Sensor</h2>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-primary" onClick={fetchData}>
              Obtener Datos
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={() => navigate("/graficas")}
            >
              Ver Gráficas
            </button>
          </div>
          {loading && (
            <div className="spinner-container">Consultando información...</div>
          )}
          {error && <p className="text-danger mt-3">{error}</p>}
          <ConsultarSensorData sensorData={sensorData} />
        </div>
        <div className="col-md-6">
          <EnviarSensorData />
        </div>
      </div>
    </div>
  );
};

export default Home;
