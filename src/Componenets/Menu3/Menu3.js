import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleMenu3 from "./SingleMenu3";

const Menu3 = () => {
  const [menu3, setMenu3] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => setMenu3(data));
  });

  return (
    <div class="grid  md:grid-cols-2 lg:grid-cols-3 my-7">
      {menu3?.meals?.map((m) => (
        <SingleMenu3 m={m}></SingleMenu3>
      ))}
    </div>
  );
};

export default Menu3;
