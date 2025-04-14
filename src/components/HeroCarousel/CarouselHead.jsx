import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6"; 

function CarouselHead({text}) {
  
  return (
    <>
      <div className="flex justify-between items-center  xl:px-5  ">
        <h2 className="text-2xl font-bold mx-auto sm:m-0 ">
          {text}
        </h2>
        <div className="sm:flex gap-4 hidden sm:visible">
          <span className=" w-8 h-8 rounded-full flex justify-center items-center bg-gray-200">
            <FaArrowLeft />
          </span>
          <span className=" w-8 h-8 rounded-full flex justify-center items-center bg-gray-200">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
}

export default CarouselHead;
