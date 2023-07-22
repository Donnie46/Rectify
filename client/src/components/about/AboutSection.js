import React from "react";
import "../../utils/css/AboutSection.css";


const AboutSection = ({ heading, text, image, sections, key }) => {
  const style = {
    margin: "auto",
    padding: "5% 25% 5% 25%", // Updated padding to move content to the right side
    color: "#1876D2",
    fontSize: "25px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    position: "relative",
    left: sections%2 ? "150px" : "0px",
    right: sections%2 ? "150px" : "0px",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/handcuffs.jpg"})`, // Add the path to your background image
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left", // Adjust as needed
    // float: isRightSide ? "right" : "left", // Conditionally float the section to the right or left
  };

  return (
    <section className={"aboutPage section" + (sections + 1)} style={style}>
      <div className="aboutText">
        <h2 className="aboutHeading">{heading}</h2>
        <p className="bodyContent">{text}</p>
      </div>
      <img src={image} alt="images" className="aboutImg" style= {{float: sections%2 ? "right" : "left", height: "400px", width: "400px"}} />   
    </section>
  );
};

export default AboutSection;