import React from "react";
import bannerImage from "../../../Images/Banner.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              className="mask mask-decagon"
              src={bannerImage}
              alt="No image Found"
            />
          </div>

          <div>
            <h1 class="text-5xl font-bold">
              Discover Restaurant <br /> & Delicious Food
            </h1>
            <p class="py-6">
              <input
                type="text"
                placeholder="Search Restaurant And Foods"
                class="input input-bordered input-secondary w-full max-w-xs"
              />
              <button class="btn bg-[#FE043C]">Go</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
