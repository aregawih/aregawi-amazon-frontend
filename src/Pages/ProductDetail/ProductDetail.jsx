import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Component/LayOut/LayOut";
import {useParams}from "react-router-dom"
import axios from "axios"
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Component/Product/ProductCard";
import Loader from "../../Component/Loader/Loader";
// import Layout 

function ProductDetail() {
  const [product, setproduct]= useState({});
  const [isLoading, setisLoading]=useState(false)
  const {productId} = useParams()
  useEffect(() => {
    setisLoading(true)
axios.get(`${productUrl}/products/${productId}`)
.then((res)=>{
  console.log(res);
  
setproduct(res.data)
setisLoading(false)
}).catch ((err)=>{
  console.log(err)
  setisLoading(false)
  
})
  }, [])
  
  // console.log(productId);
  
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard 
      product={product}
      flex = {true} 
      renderDesc={true}
      renderAdd={true}
      
      />)}
      
    </LayOut>
  );
}

export default ProductDetail;
