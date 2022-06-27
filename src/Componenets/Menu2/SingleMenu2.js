import React from "react";

const SingleMenu2 = ({ m }) => {
  return (
    <div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={m.strCategoryThumb} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{m.strCategory}</h2>
          <p>Meal Id:{m.idCategory}</p>
          <p>{m.strCategoryDescription}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMenu2;
