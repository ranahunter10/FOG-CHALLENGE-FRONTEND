import cardData from "../../public/cards_data.js";
import "./cards.css";

const Cards = () => {
  return (
    <div className="titlecards">
      <div className="card-list">
        {cardData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Cards;
