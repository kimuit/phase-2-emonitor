import React from 'react'
import { NavLink } from "react-router-dom"
function PageNavbar() {
  return (
    <div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="./Join">JOIN</NavLink>
          </div>
  )
}

export default PageNavbar