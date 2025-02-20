import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
          <div className="flexCenter" style={{ gap: "0.5rem" }}>
            <span className="primaryText">Homyz</span>
            <img src="./logo.png" alt="logo" width={130} />
          </div>
          <span className="secondaryText">
            Our vision is to provide everyone <br />
            the best place to live.
          </span>
        </div>

        {/* Right Side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Vashi Infotech Park 905, Vashi</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      
      </div>
    </section>
  );
}
