import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleMenu2 from "./SingleMenu2";

const Menu2 = () => {
  const [menu2, setMenu2] = useState();

  //fetching api using useEffeCT
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMenu2(data));
  }, []);
  //fetching api using useEffeCT
  return (
    <div class="grid  md:grid-cols-2 lg:grid-cols-3 my-7">
      {menu2?.categories?.map((m) => (
        <SingleMenu2 m={m}></SingleMenu2>
      ))}
    </div>
  );
};

export default Menu2;
