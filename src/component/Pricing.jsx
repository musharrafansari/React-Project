import React from "react";
import "./Pricing.css";
import trainer1 from "../images/trainer1.jpg";
import trainer2 from "../images/trainer2.jpg";
import trainer3 from "../images/trainer3.jpg";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <section className="page">
        <br/>
        <br/>
        <h1 className="headings">Meet With Our  Trainers</h1>
        <br/>
        <br/>
        <br/>
      <div className="team">
        <img src={trainer1} alt="" />
        <img src={trainer2} alt="" />
        <img src={trainer3} alt="" />
      </div>

      <div>
        <h1 className="heading-2">CHOOSE YOUR BEST PRICING</h1>

        <div className="pricing__wrapper">
          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">
                $200 <span> / Month </span>
              </h2>
              <h2 className="pricing section__title">SILVER PLAN</h2>
            </div>

            <div className="services">
              <ul>
              <li>Gymnastics</li>
                <li>Open Gym</li>
                <li>CrossFit</li>
               
              </ul>
              <button className="register__btn">Start Free Trial</button>
            </div>
          </div>

          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">
                $200 <span> / Month </span>
              </h2>
              <h2 className="pricing section__title">GOLD PLAN</h2>
            </div>

            <div className="services">
              <ul>
                <li>Open Gym</li>
                <li>Gymnastics</li>
                <li>Swimming</li>
              
              </ul>
              <button className="register__btn">Start Free Trial</button>
            </div>
          </div>

          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title">
                $250 <span> / Month </span>
              </h2>
              <h2 className="pricing section__title">DIAMOND PLAN</h2>
            </div>

            <div className="services">
              <ul>
                <li>Open Gym</li>
                <li>Gymnastics</li>
             
                <li>Personal Trainer</li>
              </ul>
              <button className="register__btn">Start Free Trial</button>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </section>
  );
};

export default Pricing;