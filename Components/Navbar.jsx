import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div className="menu">
        <Navlink to="/">
          <div>00 Home</div>
        </Navlink>
        <Navlink to="/Destination">
          <div>01 Destination</div>
        </Navlink>
        <Navlink to="/Crew">
          <div>02 Crew</div>
        </Navlink>
        <Navlink to="/Technology">
          <div>03 Technology</div>
        </Navlink>
      </div>
    </div>
  );
};

export default Navbar;
