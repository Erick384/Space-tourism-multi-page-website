import React from "react";
import "./App.css";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import DestinationMoon from "../Components/Destination/DestinationMoon";
import CrewPilot from "../Components/Crew/CrewPilot";
import TechnologyVehicle from "../Components/Technology/TechnologyVehicle";

const App = () => {
  return (
    <body>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<DestinationMoon />} />
          <Route path="/crew" element={<CrewPilot />} />
          <Route path="/technology" element={<TechnologyVehicle />} />
        </Routes>
      </div>
    </body>
  );
};

export default App;
