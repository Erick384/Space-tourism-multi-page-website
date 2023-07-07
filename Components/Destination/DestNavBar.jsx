import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Dest.css"

const DestNavBar = () => {
  return (
    <div className="dest-nav">
      <NavLink exact to="/destination">Moon</NavLink>
      <NavLink to="/DestMars">Mars</NavLink>
      <NavLink to="/DestEuropa">Europa</NavLink>
      <NavLink to="/DestTitan">Titan</NavLink>
    </div>
  )
}

export default DestNavBar