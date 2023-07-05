import { useState } from "react";
import "./App.css";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import DestinationMoon from "../Components/Destination/DestinationMoon";

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Destination" element={<DestinationMoon />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<TechnologyVehicle />} />
        </Routes>
          
    </>
  );
}

export default App;
