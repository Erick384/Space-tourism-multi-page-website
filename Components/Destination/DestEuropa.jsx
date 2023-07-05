import React from "react";

const DestEuropa = () => {
  return (
    <>
      <div className="dest-header">
        <span>01</span>
        <h2>PICK YOUR DESTINATION</h2>
      </div>
      <div className="content">
        <div className="dest-left"></div>
        <div className="right">
          <DestNavBar />
          <div className="destright-header">
            <h1>EUROPA</h1>
          </div>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin
          </p>
          <hr />
          <div className="dest-footer">
            <div className="distance">
              <span>AVG. DISTANCE</span>
              <h2>628 MIL. KM</h2>
            </div>
            <div className="travel-time">
              <span>EST. TRAVEL TIME</span>
              <h2>3 YEARS</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestEuropa;
