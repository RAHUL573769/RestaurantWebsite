import React from "react";
import burger1 from "../Carausel/burger1.JPG";
import kabab from "../Carausel/kabab.JPG";

const Caraousel = () => {
  return (
    <div>
      <div class="carousel carousel-center rounded-box">
        <div class="carousel-item">
          <img src={burger1} alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src={kabab} alt="Pizza" />
        </div>

        <div class="carousel-item">
          <img src={kabab} alt="Pizza" />
        </div>

        <div class="carousel-item">
          <img src={kabab} alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src={burger1} alt="Pizza" />
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
