import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VerticalCarousel.css';

const VerticalCarousel = () => {
  return (
    <div className="vertical-carousel">
      <Carousel indicators={false} controls={false} interval={3000}>
        {[...Array(10).keys()].map(i => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={`https://via.placeholder.com/400x300?text=Slide+${i + 1}`}
              alt={`Slide ${i + 1}`}
            />
            <Carousel.Caption>
              <h3>prueba {i + 1}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;



