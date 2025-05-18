import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
export default function Login() {
  let navigate = useNavigate();
  let [spinner,setSpinner] = useState(false);
  let [loginError,setLoginError] = useState("");
  async function handleLogin(loginValues) {
    setSpinner(true);
    try{
        let response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",{
          email:loginValues.email,
          password:loginValues.password
        })
        if(response.data.message == "success")
        {
          navigate("/");
        }
    }
    catch(e)
    {
       setSpinner(false);
      console.log(e);
      setLoginError(e.response.data.message)
    }
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
  });
  return (
    <>
      <form className="max-w-md mx-auto my-15 mb-5" onSubmit={formik.handleSubmit}>
        <h1 className="text-xl font-bold my-3 text-green-600">Login</h1>
        <hr></hr>
        <div className="relative z-0 w-full mb-5 mt-5 group">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="text"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-green dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 mt-5 group">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-green dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
         {spinner?<i className="fas fa-spinner fa-spin mx-1 mr-3"></i>:"login"} 
        </button>
          
            {loginError&&<div
            className="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
            role="alert"
          >
            Invalid Email or Password
          </div>}
          <p className="mt-4 text-sm font-bold my-3 text-green-600">Didn't have account yet? <NavLink className="italic underline" to="/register">Register Now</NavLink></p>
      </form>
    </>
  );
}
