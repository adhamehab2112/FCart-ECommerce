import React, { useEffect, useState } from "react";
import style from "./RecentProducts.module.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
export default function RecentProducts() {
  let [spinner, setSpinner] = useState(true);
  let navigate = useNavigate();
  function handleProduct(id) {
    navigate(`productDetails/${id}`);
  }

  let [products, setProducts] = useState([]);
  function getProducts() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        setProducts(data.data);
        setSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let [counter, setCounter] = useState(0);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {spinner == true ? (
        <div className="w-full text-center my-6 ">
          <i className="fas fa-spinner fa-spin font-bold text-green-600 text-4xl "></i>
        </div>
      ) : (
        <div className="row">
          {products.map((product) => {
            return (
              <div className="w-1/6" key={product._id}>
                <Link to={`productDetails/${product._id}`}>
                  <div className="product mx-4 my-4 p-2 cursor-pointer">
                    <img
                      className="w-full"
                      src={product.imageCover}
                      alt={product.title}
                    />
                    <h2 className="text-green-600 font-bold">
                      {product.category.name}
                    </h2>
                    <h3>{product.title.split(" ").slice(0, 2).join(" ")}</h3>
                    <div className="flex justify-between mt-2">
                      <div className="font-light  text-gray-500">
                        {product.price} EGP
                      </div>
                      <div className="">
                        {product.ratingsAverage}
                        <i className="fas fa-star text-yellow-400 mx-2"></i>
                      </div>
                    </div>
                    <button className="btn">Add to cart</button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
