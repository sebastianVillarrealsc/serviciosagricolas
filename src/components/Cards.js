import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardData = [
  { title: "Card 1", text: "Description for card 1", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 2", text: "Description for card 2", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 3", text: "Description for card 3", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 4", text: "Description for card 4", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 5", text: "Description for card 5", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 6", text: "Description for card 6", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 7", text: "Description for card 7", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 8", text: "Description for card 8", link: "#", image: "https://via.placeholder.com/150" },
  { title: "Card 9", text: "Description for card 9", link: "#", image: "https://via.placeholder.com/150" },
];

const Cards = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={card.image} className="card-img-top" alt={`Card ${index + 1}`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
