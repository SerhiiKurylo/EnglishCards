import React from "react";
import "./cards-gallery.css";
import Card from "../card";

const CardsGallery = ({ cards }) => {
  const elements = cards.map((card) => {
    return (
      <div key={card.id}>
        <Card {...card} />
      </div>
    );
  });

  return <div className="container">{elements}</div>;
};

export default CardsGallery;
