import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about-us.jpg";

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
                        <h2>We are Team Of Professionals</h2>
                        <h2 className="highlight">Lets Grow Further Towards Future</h2>
                        <p className="description about_content-desc">Lorem ipsum. Neque earum quod aspernatur exercitationem illum incidunt harum consectetur.</p>
                        <div className="choose_item-wrapper">
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose_us-item" key={index}>
                                        <span className="choose_us-icon"><i class={item.icon}></i></span>
                                        <div>
                                            <h4 className="choose_us-title">{item.title}</h4>
                                            <p className="description">{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="about_img"><img src={aboutImg} alt="" /></div>
                </div>
            </div>
        </section>
    );
};

export default About;
