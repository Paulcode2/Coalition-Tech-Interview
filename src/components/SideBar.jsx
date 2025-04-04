import React from "react";
import search from "../assets/search_FILL0_wght300_GRAD0_opsz24.png";
import emily from "../assets/Layer 8.png";
import ryan from "../assets/Layer 1.png";
import jessica from "../assets/Layer 2.png";
import brandon from "../assets/Layer 3.png";
import kevin from "../assets/Layer 4.png";
import dylan from "../assets/Layer 5.png";
import samantha from "../assets/Layer 6.png";
import nathan from "../assets/Layer 7.png";
import tyler from "../assets/Layer 9.png";
import olivia from "../assets/Layer 10.png";
import ashley from "../assets/Layer 12.png";
import mike from "../assets/pexels-photo-1222271.png";
import more from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.png";

const SideBar = () => {
  // const patientProfile = [
  //   {
  //     name: "Emily Williams",
  //     details: "Female, 18",
  //     image: emily,
  //   },
  //   {
  //     name: "Ryan Johnson",
  //     details: "Male, 45",
  //     image: ryan,
  //   },
  //   {
  //     name: "Brandon Mitchell",
  //     details: "Male, 36",
  //     image: brandon,
  //   },
  //   {
  //     name: "Jessica Taylor",
  //     details: "Female, 28",
  //     image: jessica,
  //   },
  //   {
  //     name: "Samantha Johnson",
  //     details: "Female, 56",
  //     image: samantha,
  //   },
  //   {
  //     name: "Ashley Martinez",
  //     details: "Female, 54",
  //     image: ashley,
  //   },
  //   {
  //     name: "Olivia Brown",
  //     details: "Female, 32",
  //     image: olivia,
  //   },
  //   {
  //     name: "Tyler Davis",
  //     details: "Male, 19",
  //     image: tyler,
  //   },
  //   {
  //     name: "Kevin Anderson",
  //     details: "Male, 30",
  //     image: kevin,
  //   },
  //   {
  //     name: "Dylan Thompson",
  //     details: "Male, 36",
  //     image: dylan,
  //   },
  //   {
  //     name: "Nathan Evans",
  //     details: "Male, 58",
  //     image: nathan,
  //   },
  //   {
  //     name: "Mike Nolan",
  //     details: "Mike, 31",
  //     image: mike,
  //   },
  // ];
  return (
    <div className="Side">
      <div className="head">
        <h1>Patients</h1>
        <img src={search} alt="" />
      </div>
      <div className="lists">
        {/* {patientProfile.map((member, index) => (
          <div key={index} className="list">
            <div className="datas">
              <div className="person">
                <img src={member.image} className="img" alt="" />
                <div className="texts">
                  <span id="head">{member.name}</span>
                  <span id="main">{member.details}</span>
                </div>
              </div>

              <div className="icon">
                <img src={more} alt="" />
              </div>
            </div>
          </div>
        ))} */}
        <div className="list">
          <div className="datas">
            <div className="person">
              <img src={emily} className="img" alt="" />
              <div className="texts">
                <span id="head">Emily Williams</span>
                <span id="main">Female, 18</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={ryan} className="img" alt="" />
              <div className="texts">
                <span id="head">Ryan Johnson</span>
                <span id="main">Male, 45</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={brandon} className="img" alt="" />
              <div className="texts">
                <span id="head">Brandon Mitchell</span>
                <span id="main">Male, 36</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas taylor">
            <div className="person ">
              <img src={jessica} className="img" alt="" />
              <div className="texts">
                <span id="head">Jessica Taylor</span>
                <span id="main">Female, 28</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={samantha} className="img" alt="" />
              <div className="texts">
                <span id="head">Samantha Johnson</span>
                <span id="main">Female, 56</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={ashley} className="img" alt="" />
              <div className="texts">
                <span id="head">Ashley Martinez</span>
                <span id="main">Female, 54</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={olivia} className="img" alt="" />
              <div className="texts">
                <span id="head">Olivia Brown</span>
                <span id="main">Female, 32</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={tyler} className="img" alt="" />
              <div className="texts">
                <span id="head">Tyler Davis</span>
                <span id="main">Male, 19</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={kevin} className="img" alt="" />
              <div className="texts">
                <span id="head">Kevin Anderson</span>
                <span id="main">Male, 30</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={dylan} className="img" alt="" />
              <div className="texts">
                <span id="head">Dylan Thompson</span>
                <span id="main">Male, 36</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={nathan} className="img" alt="" />
              <div className="texts">
                <span id="head">Nathan Evans</span>
                <span id="main">Male, 58</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="person">
              <img src={mike} className="img" alt="" />
              <div className="texts">
                <span id="head">Mike Nolan</span>
                <span id="main">Mike, 31</span>
              </div>
            </div>

            <div className="icon">
              <img src={more} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
