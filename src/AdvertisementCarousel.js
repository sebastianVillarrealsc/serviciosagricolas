import React from 'react';
import './VerticalCarousel.css';

const VerticalCarousel = () => {
  return (
    <div className="vertical-carousel">
      <div className="carousel-item">
        <img src="image1.jpg" alt="Imagen 1" />
      </div>
      <div className="carousel-item">
        <img src="image2.jpg" alt="Imagen 2" />
      </div>
      {/* Agrega más ítems del carrusel según sea necesario */}
    </div>
  );
};

export default VerticalCarousel;
