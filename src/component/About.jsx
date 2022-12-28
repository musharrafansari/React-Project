import React from "react";
import './About.css'
import Image1 from '../images/gym.jpeg'




const About = () => {


    return (
<section>
    <div className="about-container">
    
       <div className="heading"><h1>About</h1></div>
       <div>
      <p className="details">At THE GYM, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul. We guarantee the highest quality equipment and training programs available, an expert staff, special amenities that are often not found in other health clubs, attentive service and truly sophisticated surroundings. Our every Fitness training center is committed to being a unique Fitness training center in india.</p>
      
    
    <p><img className="image" src={Image1} alt="logImg"/></p>
      </div>

    </div>
    </section>
  );
};
      

export default About;