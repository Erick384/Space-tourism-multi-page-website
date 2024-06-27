import React from "react";

const Home = () => {
  return (
    <div className="body flex flex-col h-screen">
      <div className="flex items-center justify-center h-full w-4/5 mx-auto">
        <div className="left">
          <h2 className="headerOne text-white">So, you want to travel to</h2>
          <h1 className="headerTwo text-white">SPACE</h1>
          <p className="text-white">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right flex items-center justify-center self-center">
          <div className="circle rounded-full bg-beige h-72 w-72 flex items-center justify-center">
            <h1>EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
