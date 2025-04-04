import React, { useEffect, useState } from "react";
import jessica from "../assets/Layer 2.png";
import scheduleLogo from "../assets/BirthIcon.png";
import phone from "../assets/PhoneIcon.png";
import genderIcon from "../assets/FemaleIcon.png";
import safe from "../assets/InsuranceIcon.png";
import download from "../assets/download_FILL0_wght300_GRAD0_opsz24 (1).png";

const RightBar = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const username = "coalition";
  const password = "skills-test";


  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev/patients",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${username}:${password}`), 
          },
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (Array.isArray(data)) {
        // Find Jessica Taylor by name
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
      console.error("Error fetching Jessica Taylor's data:", err);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading patient data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="rightbar">
      <div className="top">
        <div className="profile">
          <img
            src={patientData?.profile_picture || jessica}
            alt="Jessica Taylor"
          />
          <h2>{patientData?.name || "Jessica Taylor"}</h2>
        </div>
        <div className="infos">
          <div className="info">
            <img src={scheduleLogo} alt="DOB Icon" />
            <div className="text">
              <span id="first">Date of Birth</span>
              <span id="main">{patientData?.date_of_birth || "N/A"}</span>
            </div>
          </div>
          <div className="info">
            <img src={genderIcon} alt="Gender Icon" />
            <div className="text">
              <span id="first">Gender</span>
              <span id="main">{patientData?.gender || "N/A"}</span>
            </div>
          </div>
          <div className="info">
            <img src={phone} alt="Phone Icon" />
            <div className="text">
              <span id="first">Contact Info</span>
              <span id="main">{patientData?.phone_number || "N/A"}</span>
            </div>
          </div>
          <div className="info">
            <img src={phone} alt="Phone Icon" />
            <div className="text">
              <span id="first">Emergency Contact</span>
              <span id="main">{patientData?.emergency_contact || "N/A"}</span>
            </div>
          </div>
          <div className="info">
            <img src={safe} alt="Insurance Icon" />
            <div className="text">
              <span id="first">Insurance</span>
              <span id="main">{patientData?.insurance_type || "N/A"}</span>
            </div>
          </div>
        </div>
        <div className="btn">
          <button>Show All Information</button>
        </div>
      </div>
      <div className="bottom">
        <div className="text">
          <h1>Lab Results</h1>
        </div>

        <div className="tests">
          <>
            <div className="test">
              <span id="test">{patientData?.lab_results[0]}</span>
              <img src={download} alt="Download Icon" />
            </div>
            <div className="test new">
              <span id="test">{patientData.lab_results[1]}</span>
              <img src={download} alt="Download Icon" />
            </div>
            <div className="test">
              <span id="test">{patientData.lab_results[2]}</span>
              <img src={download} alt="Download Icon" />
            </div>
            <div className="test">
              <span id="test">{patientData.lab_results[3]}</span>
              <img src={download} alt="Download Icon" />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
