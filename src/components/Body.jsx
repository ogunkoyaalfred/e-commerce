import React from "react";
import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";
import Cart from "./Cart";

const Body = () => {

    const images = [
        "/image-product-1.jpg",
        "/image-product-2.jpg",
        "/image-product-3.jpg",
        "/image-product-4.jpg",
      ];
  return (
    <div className="lg:flex lg:flex-row lg:justify-around lg:items-center lg:mx-0 md:p-10">
    <HeroImage images = {images}/>
    <HeroInfo images = {images} />
    <Cart />
    </div>

      
  );
};

export default Body;
