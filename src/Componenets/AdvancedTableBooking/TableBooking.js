import React from "react";
import booking from "../../Images/Booking'.JPG";

const TableBooking = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={booking} />
          <div>
            <h1 class="text-5xl font-bold">Book Your SEAT!</h1>
            <p class="py-6">
              It’s Friday night at your restaurant. Your host is out front,
              calling the reservations for that night to ensure you’ll have a
              full house. When you ask her how it’s looking, she responds that
              people aren’t answering, so it’s hard to tell. That night you have
              a bunch of no shows and last-minute cancellations leaving empty
              seats that you could have filled earlie
            </p>
            <button class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
