import React from "react";
import "../Container/App.css";

function Shimmer() {
  // Create an array of 8 elements to map over
  const shimmerCards = Array(8).fill(null);

  return (
    <div id="cards2" className="shimmer-container">
      {shimmerCards.map((_, index) => (
        <div 
          id="card23" 
          key={`shimmer-${index}`}
          className="shimmer-card"
        />
      ))}
    </div>
  );
}

export default Shimmer;