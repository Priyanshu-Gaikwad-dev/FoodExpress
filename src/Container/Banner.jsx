import React from 'react';

const Banner = ({ data }) => (
    <div className="banner">
       
        <h3>{data.name}</h3>
        <p>{data.message}</p>
    
    </div>
  );
  
  export default Banner;  