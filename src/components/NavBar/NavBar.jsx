import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css"
import logo from "../../../public/freshcart-logo.svg"
import { NavLink } from "react-router-dom";
export default function NavBar() {
  let [counter, setCounter] = useState(0);
  useEffect(()=>{

  },[]);
  return <>
<nav className="bg-gray-100  py-2 fixed top-0 left-0 right-0">
  <div className="container mx-auto p-2 justify-between flex flex-col lg:flex-row ">
    <div className="flex flex-col lg:flex-row ml-5">
      <img className="" src={logo} width={110} />
      <ul className="flex flex-col lg:flex-row items-center">
        <li className="mx-2 py-2 text-sm  font-light"><NavLink className="text-slate-700" to="">Home</NavLink></li>
        <li className="mx-2 py-2 text-sm  font-light"><NavLink className="text-slate-700" to="cart">Cart</NavLink></li>
        <li className="mx-2 py-2 text-sm  font-light"><NavLink className="text-slate-700" to="products">Products</NavLink></li>
        <li className="mx-2 py-2 text-sm  font-light"><NavLink className="text-slate-700" to="categories">Categories</NavLink></li>
        <li className="mx-2 py-2 text-sm  font-light"><NavLink className="text-slate-700" to="brands">Brands</NavLink></li>
      </ul>
    </div>
    <div className="">
       <ul className="flex flex-col lg:flex-row mr-5" items-center>
        <li className="mx-2 py-2 text-sm  font-light"><NavLink className="text-slate-700" to="login">Login</NavLink></li>
        <li className="mx-2 py-2 text-sm  font-light"><NavLink className="text-slate-700" to="register">Register</NavLink></li>
        <li className="mx-2 py-2 text-sm font-light"><NavLink className="text-slate-700" to="products">Log-out</NavLink></li>
        <li className="flex flex-row items-center">
        <i className="fab fa-facebook mx-2"></i>
        <i className="fab fa-instagram mx-2"></i>
        <i className="fab fa-youtube mx-2"></i>
        <i className="fab fa-tiktok mx-2"></i>
        <i className="fab fa-linkedin mx-2"></i>
        <i className="fab fa-twitter mx-2"></i>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
  </>;
}
