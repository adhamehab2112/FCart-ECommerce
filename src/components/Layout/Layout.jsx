import React, { useEffect, useState } from "react";
import style from "./Layout.module.css"
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout() {
  let [counter, setCounter] = useState(0);
  useEffect(()=>{

  },[]);
  return <>
    <NavBar/>
    <Outlet></Outlet>
    <Footer/>
  </>;
}
