import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import logo from "../../../public/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import  {
  UserContext,
} from "../../Context/userContext/UserContext";
import { useContext } from "react";
export default function NavBar() {
  let navigate = useNavigate();
  let { userLogin,setUserLogin} = useContext(UserContext);
  function handleLogOut()
  {
    setUserLogin(null);
    localStorage.removeItem('userToken');
    navigate('/login');
  }
  return (
    <>
      <nav className="bg-gray-100  py-2 fixed top-0 left-0 right-0 hidden align-middle md:block">
        <div className="container mx-auto p-2 flex flex-col lg:flex-row justify-between items-center text-center gap-6 ">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <img className="" src={logo} width={110} />
            {userLogin !== null ? (
              <>
                <ul className="flex flex-col lg:flex-row items-center">
                  <li className="mx-2 py-2 text-sm  font-light">
                    <NavLink className="text-slate-700" to="">
                      Home
                    </NavLink>
                  </li>
                  <li className="mx-2 py-2 text-sm  font-light">
                    <NavLink className="text-slate-700" to="cart">
                      Cart
                    </NavLink>
                  </li>
                  <li className="mx-2 py-2 text-sm  font-light">
                    <NavLink className="text-slate-700" to="products">
                      Products
                    </NavLink>
                  </li>
                  <li className="mx-2 py-2 text-sm  font-light">
                    <NavLink className="text-slate-700" to="categories">
                      Categories
                    </NavLink>
                  </li>
                  <li className="mx-2 py-2 text-sm  font-light">
                    <NavLink className="text-slate-700" to="brands">
                      Brands
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : null}
          </div>
          <div className="flex flex-col items-center gap-2">
            <ul className="flex flex-col lg:flex-row mr-5">
              {userLogin == null ? (
                <>
                  <li className="mx-2 py-2 text-sm  font-light">
                    <NavLink className="text-slate-700" to="login">
                      Login
                    </NavLink>
                  </li>
                  <li className="mx-2 py-2 text-sm  font-light">
                    <NavLink className="text-slate-700" to="register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="mx-2 py-2 text-sm font-light">
                  <span className="text-slate-700 cursor-pointer" onClick={handleLogOut}  >
                    Log-out
                  </span>
                </li>
              )}

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
    </>
  );
}
