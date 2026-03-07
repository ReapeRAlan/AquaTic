import React, { useState } from "react";
import { AquaTic_backend } from "declarations/AquaTic_backend";

const EnviarSensorData = () => {
  const [tds, setTds] = useState("");
  const [ph, setPh] = useState("");
  const [temperatura, setTemperatura] = useState(""); // Mostrar y solicitar como Temperatura
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "tds") setTds(value);
    if (name === "ph") setPh(value);
    if (name === "temperatura") setTemperatura(value); // Mostrar y solicitar como Temperatura
  };

  const sendData = async (e) => {
    e.preventDefault();
    const sensorData = {
      TDS: parseFloat(tds),
      PH: parseFloat(ph),
      Oxigeno: parseFloat(temperatura), // Enviar como Oxígeno
    };

    try {
      const res = await AquaTic_backend.sendSensorData(sensorData);
      setResponse(res);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Enviar Datos del Sensor</h2>
      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="tds">TDS</label>
          <input
            type="number"
            className="form-control"
            id="tds"
            name="tds"
            value={tds}
            onChange={handleInputChange}
            placeholder="TDS"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ph">PH</label>
          <input
            type="number"
            className="form-control"
            id="ph"
            name="ph"
            value={ph}
            onChange={handleInputChange}
            placeholder="PH"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="temperatura">Temperatura</label>{" "}
          {/* Mostrar como Temperatura */}
          <input
            type="number"
            className="form-control"
            id="temperatura"
            name="temperatura"
            value={temperatura}
            onChange={handleInputChange}
            placeholder="Temperatura"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Enviar Datos
        </button>
      </form>
      {response && (
        <pre className="mt-3">{JSON.stringify(response, null, 2)}</pre>
      )}
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default EnviarSensorData;
