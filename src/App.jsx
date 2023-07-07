import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import DestinationMoon from "../Components/Destination/DestinationMoon";
import Crew from "../Components/Crew/CrewPilot";
import TechnologyVehicle from "../Components/Technology/TechnologyVehicle";

function App() {
  return (
    <>
      <p>My name is Erick</p>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationMoon />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<TechnologyVehicle />} />
      </Routes>
    </>
  );
}

export default App;
