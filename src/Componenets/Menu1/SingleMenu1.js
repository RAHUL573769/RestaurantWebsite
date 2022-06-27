import React from "react";

const SingleMenu1 = ({ meal }) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={meal.strMealThumb} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{meal.strMeal}</h2>
          <p>Meal Id :{meal.idMeal}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMenu1;
