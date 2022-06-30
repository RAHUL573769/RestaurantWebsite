import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleMenu1 from "./SingleMenu1";

const Menu1 = () => {
  const [menu1, setMenu1] = useState();

  //fetching api using useEffeCT
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((res) => res.json())
      .then((data) => setMenu1(data));
  }, []);

  //fetching api using useEffeCT
  return (
    <div class="grid  md:grid-cols-2 lg:grid-cols-3">
      {menu1?.meals?.map((meal) => (
        <SingleMenu1 meal={meal}></SingleMenu1>
      ))}
    </div>
  );
};

export default Menu1;
