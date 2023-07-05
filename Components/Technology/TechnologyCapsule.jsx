import React from "react";

const TechnologyCapsule = () => {
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
          <h1>SPACE CAPSULE</h1>
          <p>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
      </div>

      <div className="capsule-right"></div>
    </div>
  );
};

export default TechnologyCapsule;
