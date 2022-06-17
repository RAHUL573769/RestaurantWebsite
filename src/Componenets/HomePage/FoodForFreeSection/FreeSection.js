import React from "react";
import dining from "../../../Images/dining.JPG";

const FreeSection = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img class="w-1/2" src={dining} />
          <div>
            <h1 class="text-5xl "> Food For Free 24/7</h1>
            <p class="py-6">
              It provides us with nutrients like fats, carbohydrates, vitamins,
              etc., to give us a healthy life and prevent diseases. Without
              food, we have a lack of nutrients in our body which might cause
              health risks in our body or even diseases
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSection;
