import { CDN_URL } from "../Links/Contants";
import "./App.css";

function Card(props) {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    veg,
  } = props.newData.info;

  return (
    <div id="cards">
      {veg && (
        <h1 id="veg" className="bg-green-500 mt-0">
          Veg
        </h1>
      )}

      <div id="card234">
        <div>
          <img
            src={CDN_URL + cloudinaryImageId}
            id="img"
            alt={name}
          />
        </div>

        <div id="details">
          <h2>{name}</h2>
          <p>{cuisines?.join(", ")}</p>
          <p> ⭐ {avgRating}</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
