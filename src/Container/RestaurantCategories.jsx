import "./Menu.css";
import React, { useState } from "react";
import ItemList from "./ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const RestaurantCategories = ({ data, toggleIndex, showList }) => {
  const [localShowList, setLocalShowList] = useState(false);
  
  const handleClick = () => {
    setLocalShowList(!localShowList);
    if (toggleIndex) {
      toggleIndex();
    }
  };

  const shouldShowList = toggleIndex ? showList : localShowList;

  return (
    <div>
      <div id="dic" onClick={handleClick}>
        <div>
          <h3>{data.title} ({data.itemCards.length})</h3>
        </div>
        <div id="arrow">
          <FontAwesomeIcon icon={shouldShowList ? faArrowUp : faArrowDown} />
        </div>
      </div>
      {shouldShowList && <ItemList item={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;