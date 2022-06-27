import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleMenu4 from "./SingleMenu4";

const Menu4 = () => {
  const [menu4, setMenu4] = useState();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((res) => res.json())
      .then((data) => setMenu4(data));
  });

  console.log(menu4?.meals);
  return (
    <div>
      {menu4?.meals?.map((m) => (
        <SingleMenu4></SingleMenu4>
      ))}
    </div>
  );
};

export default Menu4;
