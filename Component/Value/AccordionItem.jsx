import React from "react";
import "./AccordionItem.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionItem = ({ icon, heading, detail, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <span className="icon">{icon}</span>
        <h3>{heading}</h3>
        {isOpen ? <FaChevronUp className="toggle-icon" /> : <FaChevronDown className="toggle-icon" />}
      </div>

      {isOpen && (
        <div className="accordion-detail">
          <p>{detail}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
