import React from "react";

const Single = ({ m }) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={m.strMealThumb} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{m.strMeal}</h2>
          <p>Id:{m.idMeal}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Single;
