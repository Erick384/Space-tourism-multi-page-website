import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <br />
    <div className="border-line"></div>
      <div className="menu">
        <div>
          <NavLink exact to="/">00 HOME</NavLink>
        </div>

        <div>
          <NavLink to="/destination">01 DESTINATION</NavLink>
        </div>

        <div>
          <NavLink to="/crew">02 CREW</NavLink>
        </div>

        <div>
          <NavLink to="/technology">03 TECHNOLOGY</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
