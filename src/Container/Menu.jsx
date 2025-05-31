import "./Menu.css";
import Header from "./Header";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle, faMinus } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo || resInfo.length === 0) {
    return <Shimmer />;
  }

  const { text } = resInfo.cards[0].card.card;
  const { id: id1 } = resInfo.cards[1].card.card.tabs[0];
  const {
    avgRating,
    cuisines,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla = {},
  } = resInfo.cards[2].card.card.info;

  const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (category) => category.card.card["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      <Header />
      <div id="AB">
        <h1>{text}</h1>
        <p>{id1}</p>
        <hr />

        <div id="CD">
          <h1>
            <FontAwesomeIcon icon={faStar} /> {avgRating} ({totalRatingsString} • {costForTwoMessage})
          </h1>
          <p>{cuisines.join(", ")}</p>
          <h3 id="pp">
            <FontAwesomeIcon icon={faCircle} fontSize={12} /> Outlet {areaName}
          </h3>
          <FontAwesomeIcon
            icon={faMinus}
            transform={{ rotate: 90 }}
            id="plk"
            fontSize={40}
          />
          <h3 id="pppp">
            <FontAwesomeIcon icon={faCircle} fontSize={12} /> {sla.slaString}
          </h3>
          <hr id="hr" />
          <p id="free">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_86,h_30/Swiggy%20One%20Lite/One_lite_Horizontal.png"
              alt="swiggy-one-lite"
              height={25}
              width={43}
            />{" "}
            Free delivery on orders above ₹199
          </p>
        </div>

        <div id="EF">
          {categories.map((category, index) => (
            <RestaurantCategories
              key={category.card.card.title}
              data={category.card.card}
              showList={index === showIndex}
              toggleIndex={() => setShowIndex(index === showIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;