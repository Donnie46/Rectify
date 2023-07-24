import React from "react";
import {Link} from "react-router-dom"

function LandingPageButton() {
    return <Link to="/about" className="">
        <button className="btn btn-primary" > 
            <span style={{"fontSize": "24px"}}>
               Click Here To Learn More
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "3% 65% 13% 4%",
        color: "#1876D2",
        fontSize: "15px",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    }
    return <div style={style}>
        
        <div style={{"fontSize": "96px"}}>
           Welcome to Rectify!
        </div>
        <br></br>
        <div style={{"fontSize": "25px"}}>
        Unlocking Second Chances: Empowering Ex-Inmates for a Brighter Future. Join our transformative journey today.
        
        </div>
        <br />
        <LandingPageButton />
    </div>
}

function LandingFrame() {
    const style = {
        backgroundColor: "#fff2ed",
        display: "flex", // Use flexbox to center the content
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        backgroundPosition: "right", // Set the background image position
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/Handcuffs.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "display: flex",
        height: "100%",
        width: "100%",
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function Home() {
    return <div>
        <LandingFrame />
    </div>
}
export default Home