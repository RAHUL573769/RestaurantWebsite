import React from "react";
import scotter from "../../Images/scotter.JPG";

const FoodDelivery = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <img src={scotter} />
            <h1 class="text-5xl  my-3">Free Home Delivery At Your Footsteps</h1>
            <p class="py-6">We provide 24/7 food delivery at your Doorsteps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;
