import React from "react";
import DestNavBar from "./DestNavBar";

const DestinationMoon = () => {
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
            <h1>MOON</h1>
          </div>
          <p>
            {" "}
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div className="dest-footer">
            <div className="distance">
              <span>AVG. DISTANCE</span>
              <h2>384,400 km</h2>
            </div>
            <div className="travel-time">
              <span>EST. TRAVEL TIME</span>
              <h2>3 DAYS</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationMoon;
