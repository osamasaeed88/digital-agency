import React from "react";
import "../../styles/testimonial.css";

import Slider from "react-slick";

import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

const Testimonial = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoPlaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  }

  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>Trusted By More Than <span className="highlights">1000 Customer</span></h2>
        </div>
        <div className="slider_wrapper">
          <Slider {...settings}>
            <div className="slider_item">
              <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab! Corporis tempore quidem nulla alias placeat.</p>
              <div className="customer_details">
                <div className="customer_img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer_name">Jim Carry</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab! Corporis tempore quidem nulla alias placeat.</p>
              <div className="customer_details">
                <div className="customer_img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer_name">Jim Carry</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab! Corporis tempore quidem nulla alias placeat.</p>
              <div className="customer_details">
                <div className="customer_img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer_name">Jim Carry</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section >
  );
};

export default Testimonial;
