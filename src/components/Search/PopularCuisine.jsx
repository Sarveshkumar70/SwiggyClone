import React from "react";
import { firstCarouselData } from "../Api/FoodApi";

function PopularCuisine() {
  return (
    <>
      <div className="py-5">
        <h2 className="text-2xl my-2">Top Cuisines</h2>
        <div className=" flex gap-2 w-full overflow-y-auto  no-scrollbar ">
          {firstCarouselData?.map((item) => {
            return <TopCuisine  key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

function TopCuisine({ item }) {
  console.log(item ,"top cusin");
  return (
    <>
      <div className=" flex justify-center items-center flex-col w-[100%] mx-1 ">
        <div className="w-20 h-20  ">
          <img
            src={item.ImgSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default PopularCuisine;
