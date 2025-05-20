import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import RecentProducts from "../RecentProducts/RecentProducts";

export default function Home() {
  let [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
        <RecentProducts/>
    </>
  );
}
