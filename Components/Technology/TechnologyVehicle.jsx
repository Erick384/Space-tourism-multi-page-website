import React from "react";

const TechnologyVehicle = () => {
  return (
    <div className="content">
      <div className="tech-left">
        <div className="tech-header">
          <span>03</span>
          <h2>SPACE LAUNCH 101</h2>
        </div>

        <div className="tech-links">
          <div className="tech-circle">
            <span>1</span>
          </div>
          <div className="tech-circle">
            <span>1</span>
          </div>
          <div className="tech-circle">
            <span>1</span>
          </div>
        </div>

        <div className="tech-content">
          <h1>THE TERMINOLOGY...</h1>
          <h1>LAUNCH VEHICLE</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>

      <div className="vehicle-right"></div>
    </div>
  );
};

export default TechnologyVehicle;
