import React from "react";
import "../../styles/services.css";

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Developement',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias doloribus!'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias doloribus!'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Graphic Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias doloribus!'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Digital Marketing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias doloribus!'
    },
]
const Service = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="services_top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Save time managing your business with</h2>
                <h2 className="highlight">Our Best Services</h2>
            </div>
            <div className="service_item-wrapper">
                {
                    serviceData.map((item,index)=>(
                 <div className="services_item" key={index}>
                    <span className="service_icon"><i class={item.icon}></i></span>
                    <h3 className="service_title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                 </div>
                    ))
                }
            </div>
        </div>
    </section>
  );
};

export default Service;
