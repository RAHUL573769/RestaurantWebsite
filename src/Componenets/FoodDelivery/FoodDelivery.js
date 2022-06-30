import React from "react";
import scotter from "../../Images/scotter.JPG";

const FoodDelivery = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={scotter} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Food Delivery!</h1>
            <p class="py-6">We are open 24/7</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;
