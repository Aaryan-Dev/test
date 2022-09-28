import React from 'react'
import {NavLink} from "react-router-dom"
import MainAppRoutes from '../Routes/MainAppRoutes'
const Navbar = () => {
  return (
    <div>
      <div>
      <NavLink to="/"><div>Home</div></NavLink>
        <NavLink to="/job-search"><div>Job</div></NavLink>
        <NavLink to="/courses"><div>Courses</div></NavLink>
        <NavLink to="/my-order"><div>My order</div></NavLink>
        <NavLink to="/login"><div>LOGIN</div></NavLink>
        <NavLink to="/cart"><div>Add to cart</div></NavLink>
      </div>
        <MainAppRoutes/>
    </div>
  )
}

export default Navbar