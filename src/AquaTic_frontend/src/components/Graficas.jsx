// src/components/Graficas.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { AquaTic_backend } from "declarations/AquaTic_backend";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const Graficas = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AquaTic_backend.fetchSensorData();
        const parsedResponse = JSON.parse(response);
        setSensorData(parsedResponse);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const chartData = useMemo(() => {
    const labels = [];
    const oxigeno = [];
    const ph = [];
    const tds = [];

    sensorData.forEach((item) => {
      labels.push(item.created_at);
      oxigeno.push(item.oxigeno);
      ph.push(item.ph);
      tds.push(item.tds);
    });

    const common = {
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      fill: true,
      tension: 0.4,
    };

    return {
      oxigeno: {
        labels,
        datasets: [{ ...common, label: "Temperatura", data: oxigeno }],
      },
      ph: {
        labels,
        datasets: [{ ...common, label: "ph", data: ph }],
      },
      tds: {
        labels,
        datasets: [{ ...common, label: "tds", data: tds }],
      },
    };
  }, [sensorData]);

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 2000, // Extend the animation duration
    },
  };

  return (
    <div className="container mt-5">
      <h1>Gráficas</h1>
      {loading ? (
        <p>Consultando información...</p>
      ) : (
        <div className="charts-grid">
          <div className="chart-item">
            <h2>Temperatura</h2>
            <Line data={chartData.oxigeno} options={chartOptions} />
          </div>
          <div className="chart-item">
            <h2>PH</h2>
            <Line data={chartData.ph} options={chartOptions} />
          </div>
          <div className="chart-item">
            <h2>TDS</h2>
            <Line data={chartData.tds} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Graficas;
