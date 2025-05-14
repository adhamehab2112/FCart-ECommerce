import React, { useEffect, useState } from "react";
import style from "./NotFound.module.css";
import notFound from "../../assets/error.svg";
export default function NotFound() {
  let [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div className="">
        <img className="mx-auto" src={notFound} width={500} />
      </div>
    </>
  );
}
