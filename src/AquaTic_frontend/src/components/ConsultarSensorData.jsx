import React from "react";

const ConsultarSensorData = ({ sensorData }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={`table-container ${sensorData ? "show" : ""}`}>
        {sensorData && (
          <div className="table-responsive">
            <table className="table table-striped table-hover table-sm custom-table">
              <thead>
                <tr>
                  <th>ID del Sensor</th>
                  <th>TDS</th>
                  <th>PH</th>
                  <th>Temperatura</th> {/* Mostrar como Temperatura */}
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {sensorData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.tds}</td>
                    <td>{data.ph}</td>
                    <td>{data.oxigeno}</td> {/* Consultar como Oxígeno */}
                    <td>{data.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultarSensorData;
