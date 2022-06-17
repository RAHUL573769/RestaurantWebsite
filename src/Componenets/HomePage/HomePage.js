import React from "react";
import TableBooking from "../AdvancedTableBooking/TableBooking";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
import Banner from "./Banner/Banner";
import Booking from "./BookingCard/Booking";
import FreeSection from "./FoodForFreeSection/FreeSection";
import Info from "./Information/Info";
import Items from "./ItemsCarasoul/Items";
import Services from "./OurServices/Services";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      {/* <Items></Items> */}
      <Booking></Booking>
      <Services></Services>
      <TableBooking></TableBooking>
      <FreeSection></FreeSection>
      <FoodDelivery></FoodDelivery>
    </div>
  );
};

export default HomePage;
