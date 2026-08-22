import React from "react";

const Card = ({ key, name, price }: any) => {
  return (
    <div className="col-md-4 mb-3">
      <div key={key} className="card p-3 shadow">
        <h5>{name}</h5>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
