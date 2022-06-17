import React from "react";

const Booking = () => {
  return (
    <div class="grid justify-items-center my-8 ">
      <div class="card w-96 h-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10"></figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Advanced Booking</h2>

          <div class="card-actions">
            <div class="form-control">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Search Restaurants…"
                  class="input input-bordered"
                />
                <button class="btn btn-square">GO</button>
              </div>
              <div class="dropdown my-8">
                <div class="dropdown">
                  <label tabindex="0" class="btn m-1">
                    Date
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <label tabindex="0" class="btn m-1">
                    Time
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <label tabindex="0" class="btn m-1">
                    Guests
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
