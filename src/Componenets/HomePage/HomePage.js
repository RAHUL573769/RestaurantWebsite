import React from "react";
import Footer from "../../Shared/Footer";
import TableBooking from "../AdvancedTableBooking/TableBooking";
import Caraousel from "../Carausel/Caraousel";
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
      <Caraousel></Caraousel>
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
