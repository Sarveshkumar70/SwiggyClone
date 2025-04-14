import React from "react";
import { MdStarRate } from "react-icons/md";

function RestaurantCard({ item }) {
  return (
    <>
      <div
        className="  flex flex-col justify-center items-center hover:scale-95 mx-auto hover:cursor-pointer  w-[260px] 
      transition delay-105 duration-150 ease-linear ">
        {/* img  */}
        <div className="relative overflow-hidden w-[220px] h-[150px]  sm:w-[260px]  sm:h-[160px] rounded-[10px]">
          <img
            className="object-cover w-[100%] h-[100%] rounded-[10px]"
            src={item.imgSrc}
            alt=""
          />
          <div className=" absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        {/* Text box */}
        <div className="mt-2  w-full   ">
          <h4 className="font-bold text-lg">{item.headingText} </h4>
          <p className="font-semibold flex items-center">
            <span className="me-1 p-0.5 bg-green-700 text-white rounded-full">
              <MdStarRate />
            </span>
            <span className="font-medium">{item.ratingData}</span>
          </p>
          <div className="flex flex-col text-gray-900">
            <span>{item.para1}</span>
            <span>{item.para2}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;
