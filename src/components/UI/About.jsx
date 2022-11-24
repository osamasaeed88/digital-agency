import React from "react";
import "../../styles/about.css";

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First Working Process',
        description: 'Lorem ipsum. Neque earum quod aspernatur exercitationem illum incidunt harum consectetur.',
    },
    {
        icon: 'ri-team-line',
        title: 'Team Of Experts',
        description: 'Lorem ipsum. Neque earum quod aspernatur exercitationem illum incidunt harum consectetur.',
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Support',
        description: 'Lorem ipsum. Neque earum quod aspernatur exercitationem illum incidunt harum consectetur.',
 }
]

const About = () => {
  return (
    <section id="about">
        <div className="container">
            <div className="about_wrapper">
                <div className="about_content">
                <h6 className="subtitle">Why Choosing Us</h6>
                   <h2>We are team of experts and belive in commentments</h2>
                   <h2 className="highlight">Lets Grow Further Towards Future</h2>
                   <p className="description about_content-desc">Lorem ipsum. Neque earum quod aspernatur exercitationem illum incidunt harum consectetur.</p>
                
                <div className="choose_us-item">
                    <span className="choose_us-icon"></span>
                <div>
                    <h4 className="choose_us-title"></h4>
                    <p className="description"></p>
                </div>
                </div>
                </div>

                <div className="about_img"></div>
            </div>
        </div>
    </section>
  );
};

export default About;
