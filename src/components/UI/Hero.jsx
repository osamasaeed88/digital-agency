import React from "react";

import "../../styles/hero.css";

import heroDarkImg from "../../images/hero-img.png";

const Hero = () => {
  return (
  <section className='hero_section'>
    <div className="container">
        <div className="hero_wrapper">
            <div className="hero_content">
              <div>
                <h2>We Digitalizing The Planet</h2>
                <h2>Digiatl Planet Is Feature</h2>
                <h2 className="highlight">Promote Your Brand</h2>
              </div>
              <p className="description">Lorem ipsum dolor sit amet 
              consectetur, adipisicing elit. Iste incidunt beatae 
              repellendus aliquid quas molestias obcaecati libero omnis 
              nihil tenetur provident eius, maiores ut totam culpa 
              fugit quo quod sunt.</p>
              <div className="hero_btns">
               <button className="primary_btn">Get Started Now!</button>
               <button className="secondary_btn">Discover More</button>
              </div>
            </div>
            <div className="hero_img">
              <img src={heroDarkImg} alt="hero-img" />
            </div>
        </div>
    </div>
  </section>
  );
};

export default Hero;
