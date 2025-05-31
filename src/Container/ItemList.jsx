import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Links/CartSlice";
import { menuPhoto } from "../Links/Contants";
import "./Menu.css";

const ItemList = ({ item }) => {  
  const dispatch = useDispatch();

  const handleAdd = (menuItem) => {
    dispatch(addItem(menuItem));
  };

  return (
    <div id="menu-item">
      <ul>
        {item.map((menuItem) => {
          const price = menuItem.card.info.price || menuItem.card.info.defaultPrice;
          const hasDescription = menuItem.card.info.description;
          const hasImage = menuItem.card.info.imageId;

          return (
            <li key={menuItem.card.info.id}>
              <div id="item">
                <div id="details">
                  <h2 id="name">{menuItem.card.info.name}</h2>
                  <h2 id="price">₹{(price / 100).toFixed(2)}</h2>
                  {hasDescription && (
                    <ItemDescription description={menuItem.card.info.description} />
                  )}
                </div>
                {hasImage && (
                  <div id="image">
                    <img
                      src={menuPhoto + menuItem.card.info.imageId}
                      alt={menuItem.card.info.name}
                      id="img2"
                    />
                    <button 
                      onClick={() => handleAdd(menuItem)}
                      className="add-btn"
                    >
                      ADD
                    </button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <h1 id="end"></h1>
    </div>
  );
};

const ItemDescription = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 120;

  if (!description) return null;

  if (description.length <= maxLength) {
    return <p id="description">{description}</p>;
  }

  return (
    <p id="description">
      {showMore ? description : `${description.substring(0, maxLength)}...`}
      <button
        onClick={() => setShowMore(!showMore)}
        className="show-more-btn"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </p>
  );
};

export default ItemList;