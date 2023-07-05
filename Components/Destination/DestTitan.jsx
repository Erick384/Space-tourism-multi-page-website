import React from "react";

const DestTitan = () => {
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
            <h1>TITAN</h1>
          </div>
          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <hr />
          <div className="dest-footer">
            <div className="distance">
              <span>AVG. DISTANCE</span>
              <h2> 1.6 BIL. KM</h2>
            </div>
            <div className="travel-time">
              <span>EST. TRAVEL TIME</span>
              <h2>7 YEARS</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestTitan;
