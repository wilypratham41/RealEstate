import React, { useState } from "react";
import "./Value.css";
import AccordionItem from "./AccordionItem";
import data from "../../utils/accordion"; // Importing data

function Value() {
  const [openIndex, setOpenIndex] = useState(0); // First item always open

  const handleToggle = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index); // Change only when a different item is clicked
    }
  };

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="Value" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best service for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          {/* Accordion Section */}
          <div className="accordion-container">
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                icon={item.icon}
                heading={item.heading}
                detail={item.detail}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
