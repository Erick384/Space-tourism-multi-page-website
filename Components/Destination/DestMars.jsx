import React from 'react'

const DestMars = () => {
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
            <h1>MARS</h1>
          </div>
          <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!
          </p>
          <hr />
          <div className="dest-footer">
            <div className="distance">
              <span>AVG. DISTANCE</span>
              <h2>225 MIL. km</h2>
            </div>
            <div className="travel-time">
              <span>EST. TRAVEL TIME</span>
              <h2>9 MONTHS</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DestMars