import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Single from "./Single";

const Menu4 = () => {
  const [menu4, setMenu4] = useState();

  //fetching api using useEffeCT
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((res) => res.json())
      .then((data) => setMenu4(data));
  });
  //fetching api using useEffeCT

  return (
    <div class="grid  md:grid-cols-2 lg:grid-cols-3 my-7">
      {menu4?.meals?.map((m) => (
        <Single m={m}></Single>
      ))}
    </div>
  );
};

export default Menu4;
