import React from 'react'
import logo from "../assets/TestLogo.png"
import homeLogo from "../assets/home_FILL0_wght300_GRAD0_opsz24.png"
import profileLogo from "../assets/group_FILL0_wght300_GRAD0_opsz24.png"
import scheduleLogo from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.png"
import messageLogo from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.png"
import transacLogo from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.png"
import lastLogo from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
import settings from "../assets/settings_FILL0_wght300_GRAD0_opsz24.png"
import icon from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.png"

const NavBar = () => {
  return (
    <div className='Nav'>
      <div className="logos">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <div className='home'>
            <img src={homeLogo} alt="" />
            <span>Home</span>
        </div>
        <div className='profile'>
            <img src={profileLogo} alt="" />
            <span>Profile</span>
        </div>
        <div>
            <img src={scheduleLogo} alt="" />
            <span>Schedule</span>
        </div>
        <div>
            <img src={messageLogo} alt="" />
            <span>Messages</span>
        </div>
        <div>
            <img src={transacLogo} alt="" />
            <span>Transactions</span>
        </div>
      </div>
      <div className="btns">
        <div className="logo">
            <img src={lastLogo} alt="" />
        </div>
        <div className="text">

        </div>
        <div className="btn">
            <img src={settings} alt="" />
            <img src={icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
