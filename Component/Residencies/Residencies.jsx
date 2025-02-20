
// Residencies.js
import React, { useState } from 'react';
import './Residencies.css';
import data from '../../utils/slider.json';


  function Residencies() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedResidency, setSelectedResidency] = useState(null); // To store clicked residency
  
    const totalSlides = data.length;
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };
  
    const getVisibleResidencies = () => {
      return [
        data[currentSlide],
        data[(currentSlide + 1) % totalSlides],
        data[(currentSlide + 2) % totalSlides],
      ];
    };
  
    return (
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          {/* Header */}
          <div className="r-header-buttons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
            <div className="r-head flexColStart">
              <span className="orangeText" style={{ color: 'orange', fontWeight: 'bold' }}>Best Choice</span>
              <span className="primaryText" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Popular Residencies</span>
            </div>
            <div className="r-buttons" style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={prevSlide} style={{ padding: '10px 15px', border: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>&lt;</button>
              <button onClick={nextSlide} style={{ padding: '10px 15px', border: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>&gt;</button>
            </div>
          </div>
  
          {/* Carousel */}
          <div className="r-content" style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
            {getVisibleResidencies().map((residency, index) => (
              <div 
                key={index} 
                className="r-card" 
                style={{ flex: '0 0 30%', cursor: 'pointer' }} 
                onClick={() => setSelectedResidency(residency)} // Open modal on click
              >
                <img src={residency.image} alt={residency.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="r-price" style={{ marginTop: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{residency.price}</span>
                </div>
                <span className="primaryText">{residency.name}</span>
                <br />
                <span className="secondaryText">{residency.detail}</span>
              </div>
            ))}
          </div>
  
          {/* Modal - Shows when a residency is clicked */}
          {selectedResidency && (
            <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="modal-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '80%', maxWidth: '600px', position: 'relative' }}>
                <span className="close-btn" onClick={() => setSelectedResidency(null)} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '1.5rem' }}>&times;</span>
                <img src={selectedResidency.image} alt={selectedResidency.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
                <h2>{selectedResidency.name}</h2>
                <p><strong>Price:</strong> ${selectedResidency.price}</p>
                <p><strong>Details:</strong> {selectedResidency.detail}</p>
                <p><strong>Bedrooms:</strong> {selectedResidency.bedrooms}</p>
                <p><strong>Bathrooms:</strong> {selectedResidency.bathrooms}</p>
                <p><strong>Square Footage:</strong> {selectedResidency.squareFootage} sq. ft.</p>
                <p><strong>Year Built:</strong> {selectedResidency.yearBuilt}</p>
                <p><strong>Address:</strong> {selectedResidency.address}</p>
                <p><strong>Neighborhood:</strong> {selectedResidency.neighborhood}</p>
                <p><strong>Nearby Schools:</strong> {selectedResidency.nearbySchools.join(', ')}</p>
                <p><strong>Amenities:</strong> {selectedResidency.amenities.join(', ')}</p>
                <button 
  className="modal-close-btn" 
  onClick={() => setSelectedResidency(null)}
>
  Close
</button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
  
  export default Residencies;
  