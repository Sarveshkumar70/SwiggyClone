import React from "react";
import CarouselContainer from "../components/HeroCarousel/CarouselContainer";
import RestaurantContainer from "../components/Top restaurant/RestaurantContainer";
import FoodDelivery from "../components/Online food delivery/FoodDelivery";
import FooterContainer from "../components/Footer/FooterContainer";

function Home() {
  return (
    <>
      {/* <main className="container mx-auto px-8 xl:px-32 mt-25 "> */}
      <main className="container mx-auto w-[90%]  xl:w-[82%] mt-25 ">
        <CarouselContainer />
        <hr className="text-gray-200 mt-15" />
        <RestaurantContainer />
        <hr className="text-gray-200 mt-12" />
        <FoodDelivery />
      </main>
      <div className=" mx-auto px-8 xl:px-32 bg-gray-100 ">
      <FooterContainer />
      </div>
    </>
  );
}

export default Home;
