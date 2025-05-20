import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Categorey from "./components/Categorey/Categorey";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import UserContextProvider from "./Context/userContext/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

let router = createBrowserRouter([
  { 
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute><Home /></ProtectedRoute> ,
      },
      {
        path: "categories",
        element: <ProtectedRoute><Categorey /> </ProtectedRoute>,
      },
      {
        path: "brands",
        element:<ProtectedRoute><Brands /></ProtectedRoute> ,
      },
      {
        path: "cart",
        element:<ProtectedRoute><Cart /></ProtectedRoute> ,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <ProtectedRoute><Products /></ProtectedRoute> ,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
