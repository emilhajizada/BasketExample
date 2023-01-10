import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
function Navbar() {
  return (
    <div  style={{backgroundColor:"gray",padding:"20px"}}>
        <NavLink style={{margin:"0 20px"}} to={"/"}>Products</NavLink>
        
        <NavLink to={"/basket"}>Basket</NavLink>
    </div>
  )
}

export default Navbar