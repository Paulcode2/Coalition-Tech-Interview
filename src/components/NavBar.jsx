import React from "react";
import logo from "../assets/TestLogo.png";
import homeLogo from "../assets/home_FILL0_wght300_GRAD0_opsz24.png";
import profileLogo from "../assets/group_FILL0_wght300_GRAD0_opsz24.png";
import scheduleLogo from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.png";
import messageLogo from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.png";
import transacLogo from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.png";
import lastLogo from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import settings from "../assets/settings_FILL0_wght300_GRAD0_opsz24.png";
import icon from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav">
      <div className="logos">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <a href="" className="home">
          <img src={homeLogo} alt="" />
          <span>Overview</span>
        </a>
        <a href="" className="profile">
          <img src={profileLogo} alt="" />
          <span>Patients</span>
        </a>
        <a href="">
          <img src={scheduleLogo} alt="" />
          <span>Schedule</span>
        </a>
        <a href="">
          <img src={messageLogo} alt="" />
          <span>Messages</span>
        </a>
        <a href="">
          <img src={transacLogo} alt="" />
          <span>Transactions</span>
        </a>
      </div>
      <div className="btns">
        <div className="logo">
          <img src={lastLogo} alt="" />
        </div>
        <div className="text">
          <span id="head">Dr. Jose Simmons</span>
          <span id="main">General Practitioner</span>
        </div>
        <div className="border"></div>
        <div className="btn">
          <img src={settings} alt="" />
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
