import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetails() {
  let [productDetails, setProductDetails] = useState(null);
  let [spinner, setSpinner] = useState(true);
  let { productId } = useParams();
  async function getProduct(id) {
    try {
      let response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );
      setProductDetails(response.data.data);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct(productId);
  }, []);
  return (
    <>
      {spinner == true ? (
        <div className="w-full text-center my-6 ">
          <i className="fas fa-spinner fa-spin font-bold text-green-600 text-4xl "></i>
        </div>
      ) : (
        <div className="row">
          <div className="w-1/4">
            <img className="w-full" src={productDetails?.imageCover} />
          </div>
          <div className="w-3/4 ">
            <h2 className="font-bold ">{productDetails?.title}</h2>
            <h3 className="mx-3 my-3 text-gray-500">
              {productDetails?.description}
            </h3>
            <h3 className="text-gray-800 mx-3 my-3">
              {productDetails?.category.name}
            </h3>
            <div className="flex justify-between text-gray-800 mx-3 my-3">
              <h3>{productDetails?.price} EGP</h3>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-500 mx-2"></i>
                <h3 className="">{productDetails?.ratingsAverage}</h3>
              </div>
            </div>
            <button className="w-full mx-auto my-3 p-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
              + Add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
