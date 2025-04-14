import React from "react";
import RestaurantCard from "../Top restaurant/RestaurantCard";
import {carouselData} from "../Api/FoodApi"


function ItemContainer() {

  return (
    <div className=" grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-10 mt-8 ">
      {carouselData?.map((item) => (
        <RestaurantCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemContainer;
