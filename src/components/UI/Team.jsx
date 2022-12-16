import React from 'react';
import "../../styles/team.css";

import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMemeber = [
  {
    imageURL: team01,
    name: 'Jim Carry',
    position: 'C.E.O & Sr. Developer',
  },
  {
    imageURL: team02,
    name: 'Elly',
    position: 'C.F.O',
  },
  {
    imageURL: team03,
    name: 'John Wick',
    position: 'Marketing Head',
  },
  {
    imageURL: team04,
    name: 'Arnold Russels',
    position: 'Operations General Manager',
  }
]

const Team = () => {
  return (
    <section className="our_team">
      <div className="container">
        <div className="team_content">
          <h6 className="subtitle">Our Team</h6>
          <h2>This is Us <span className="highlight">DigiPlanet Team</span></h2>
        </div>
        <div className="team_wrapper">
          {
            teamMemeber.map((item, index) => (
              <div className="team_item" key={index}>
                <div className="team_img">
                  <img src={item.imageURL} alt="" />
                </div>
                <div className="team_details">
                  <h4>{item.name}</h4>
                  <p className="description">{item.position}</p>
                  <div className="team_member-social">
                    <span><i class="ri-linkedin-line"></i></span>
                    <span><i class="ri-twitter-line"></i></span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Team;
