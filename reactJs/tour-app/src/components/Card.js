import React, { useState } from "react";


export const Card = ({ id, images, info, price, name,removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  const description =  readmore ? info :`${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  
  return (
    <div className="card">
      <img src={images} alt="photos" className="image" />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `show less` : `readmore`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={()=>{removeTour(id)}}>not interested</button>
    </div>
  );
};
