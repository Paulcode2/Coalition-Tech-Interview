import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-adapter-date-fns";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartDataLabels
);

const BloodLevelChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev/patients",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("coalition:skills-test"),
          },
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (Array.isArray(data)) {
        const jessica = data.find(
          (patient) => patient.name.toLowerCase() === "jessica taylor"
        );

        if (jessica) {
          const dates = [
            "2023-10-01",
            "2023-11-01",
            "2023-12-01",
            "2024-01-01",
            "2024-02-01",
            "2024-03-01",
          ];
          const systolicData = [120, 130, 160, 110, 140, 160]; // Dummy data for Systolic
          const diastolicData = [100, 80, 90, 85, 75, 78]; // Dummy data for Diastolic

          setChartData({
            labels: dates,
            datasets: [
              {
                label: "Systolic",
                data: systolicData,
                borderColor: "#D63384", // Pink
                backgroundColor: "rgba(214, 51, 132, 0.2)",
                pointBackgroundColor: "#D63384",
                pointRadius: 6,
                pointHoverRadius: 8,
                tension: 0.4,
              },
              {
                label: "Diastolic",
                data: diastolicData,
                borderColor: "#5C62EC", // Blue
                backgroundColor: "rgba(92, 98, 236, 0.2)",
                pointBackgroundColor: "#5C62EC",
                pointRadius: 6,
                pointHoverRadius: 8,
                tension: 0.4,
              },
            ],
          });
        } else {
          setError("Jessica Taylor not found.");
        }
      } else {
        setError("Unexpected API response format.");
      }
    } catch (err) {
      console.error("Error fetching Jessica Taylor's data:", err);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          tooltipFormat: "MMM yyyy",
          displayFormats: {
            month: "MMM yyyy",
          },
        },
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
        title: {
          display: false,
        },
        grid: {
          color: "#E0E0E0",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        color: "white",
        backgroundColor: (context) => context.dataset.borderColor,
        borderRadius: 5,
        padding: 6,
        display: "auto",
        formatter: (value) => value.toFixed(2),
      },
    },
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div
      style={{
        background: "#F9F9FC",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "800px",
      }}
    >
      <div style={{ width: "450px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h3 style={{ color: "#333", margin: 0 }}>Blood Pressure</h3>
          <select
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            <option>Last 6 months</option>
          </select>
        </div>
        {chartData ? (
          <Line data={chartData} options={options} />
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <div style={{ textAlign: "right" }}>
          <p style={{ color: "#D63384", margin: "5px 0", fontWeight: "bold" }}>
            Systolic
          </p>
          <p style={{ fontSize: "24px", margin: "5px 0" }}>
            {chartData?.datasets[0]?.data.slice(-1)[0] || "--"}
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            ▲ Higher than Average
          </p>
          <p style={{ color: "#5C62EC", margin: "5px 0", fontWeight: "bold" }}>
            Diastolic
          </p>
          <p style={{ fontSize: "24px", margin: "5px 0" }}>
            {chartData?.datasets[1]?.data.slice(-1)[0] || "--"}
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            ▼ Lower than Average
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodLevelChart;
