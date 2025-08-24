import React from "react";
import { useState } from "react";

const HeroImage = ({images}) => {

  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div>
    <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center lg:mx-0 md:p-10">
      <div className="heroimg">
        <div className="nextprev flex flex-row absolute inset-0 items-center justify-between px-12 lg:hidden">
          <img
            src="/icon-previous.svg"
            alt=""
            className="bg-gray-300 p-4 rounded-full"
            onClick={() => {
              let currentIndex = images.indexOf(currentImage);
              setCurrentImage(
                images[(currentIndex - 1 + images.length) % images.length]
              );
            }}
          />
          <img
            src="/icon-next.svg"
            alt=""
            className="bg-gray-300 p-4 rounded-full"
            onClick={() => {
              let currentIndex = images.indexOf(currentImage);
              setCurrentImage(images[(currentIndex + 1) % images.length]);
            }}
          />
        </div>
        <img src={currentImage} alt="" className="lg:w-[36rem] lg:rounded-3xl xl:w-[26rem] transition-all duration-300 ease-in-out" />
      </div>
      </div>
      <div className="imagedisplay">
        <div className="thumbnails hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6 lg:mt-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail w-20 rounded-2xl hover:cursor-pointer hover:border-4 hover:border-amber-600 ${
                currentImage === image ? "border-4 border-amber-600 opacity-65" : ""
              }`}
              onClick={() => setCurrentImage(image)}
            >
              <img src={image} alt="" className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default HeroImage;
