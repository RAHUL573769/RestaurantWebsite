import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/menu1">Menu 1</Link>
      </li>
      <li>
        <Link to="/menu2">Menu 2</Link>
      </li>
      <li>
        <Link to="/menu3">Menu 3</Link>
      </li>
      <li>
        <Link to="/menu4">Menu 4</Link>
      </li>
      {/* <li>
        <Link>Menu 2</Link>
      </li>
      <li>
        <Link>Menu 3</Link>
      </li>

      <li>
        <Link>Menu 4</Link>
      </li> */}
    </>
  );
  return (
    // <div>
    //   <div>
    //     <h1 className="text-3xl	">expice</h1>
    //   </div>

    //   <div></div>
    // </div>

    <div class="navbar bg-base-100">
      <div class="navbar-start">
        {/* <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div> */}
        <h1 class=" font-bold mx-14 text-5xl text-[#FE043C]	">
          <a href="https://www.tripadvisor.com/Restaurants-g319837-Chittagong_City_Chittagong_Division.html">
            {" "}
            expice
          </a>
        </h1>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Header;
