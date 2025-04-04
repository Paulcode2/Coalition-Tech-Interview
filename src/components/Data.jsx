import React, { useEffect, useState } from "react";
import BloodLevelChart from "./BloodLevelChart";
import temp from "../assets/temperature.png";
import respi from "../assets/respiratory rate.png";
import heart from "../assets/HeartBPM.png";
import downArrow from "../assets/ArrowDown.png";

const Data = () => {
  const [patientData, setPatientData] = useState(null);
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
          setPatientData(jessica);
        } else {
          setError("Jessica Taylor not found.");
        }
      } else {
        setError("Unexpected API response format.");
      }
    } catch (err) {
      alert("Error fetching Jessica Taylor's data:", err);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Get the first 6 diagnosis history items
  const limitedDiagnosisHistory = patientData?.diagnosis_history?.slice(0, 6) || [];

  return (
    <div className="data">
      <div className="top">
        <div className="head">
          <h2>Diagnosis History</h2>
        </div>

        <div className="chart">
          <div className="graph">
            <BloodLevelChart />
          </div>
          <div className="center">
            {patientData && (
              <>
                <div className="respiratory-rate">
                  <img src={respi} alt="Respiratory Rate" />
                  <div className="texts">
                    <span id="head">Respiratory Rate</span>
                    <span id="main">
                      {patientData.respiratory_rate || "Data Not Available"}
                    </span>
                  </div>
                  <span id="det">Normal</span>
                </div>

                <div className="temperature">
                  <img src={temp} alt="Temperature" />
                  <div className="texts">
                    <span id="head">Temperature</span>
                    <span id="main">
                      {patientData.temperature || "Data Not Available"}
                    </span>
                  </div>
                  <span id="det">Normal</span>
                </div>

                <div className="heart-rate">
                  <img src={heart} alt="Heart Rate" />
                  <div className="texts">
                    <span id="head">Heart Rate</span>
                    <span id="main">
                      {patientData.heart_rate || "Data Not Available"}
                    </span>
                  </div>
                  <div className="icon">
                    <img src={downArrow} alt="Arrow" />
                    <span id="det">Lower than Average</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="head">
          <h2>Diagnostic List</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {limitedDiagnosisHistory.length > 0 ? (
              limitedDiagnosisHistory.map((diagnosis, index) => (
                <tr key={index}>
                  <td>{diagnosis.name || "N/A"}</td>
                  <td>{diagnosis.description || "No description"}</td>
                  <td>{diagnosis.status || "Unknown"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No diagnosis history available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
