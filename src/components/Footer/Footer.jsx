import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import amazonLogo from "../../assets/amazon.png";
import amex from "../../assets/amex.svg";
import payPal from "../../assets/PayPal.png";
import googlePlay from "../../assets/googlePlay.svg";
import appStore from "../../assets/appStore.svg";
export default function Footer() {
  let [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-gray-100 p-10">
        <h2 className="text-xl">Get the FreshCart App</h2>
        <p className="py-4 text-slate-700">
          We will send you a link, open it on your phone to download the app
        </p>
        <div className="pl-2">
          <input
            className="w-3/4 p-2 text-sm rounded-md"
            placeholder="Email.."
          />
          <button className=" mx-8 w-1/5 bg-green-600 text-base text-white py-1 rounded-md">
            Share App Link
          </button>
        </div>
        <hr className="my-4 font-bold" />
        <div className=" p-2 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg mr-2">Payment Partners</p>
            <img className="px-2 pt-2" src={amazonLogo} width={110} />
            <img className="px-2 pt-2" src={amex} width={60} />
            <img className="px-2 pt-2" src={payPal} width={90} />
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg mr-2 mt-1">Get Deliveries With App</p>
            <img className="px-2 pt-2" src={googlePlay} width={110} />
            <img className="px-2 pt-2" src={appStore} width={110} />
          </div>
        </div>
         <hr className="my-4 font-bold" />
      </div>
    </>
  );
}
