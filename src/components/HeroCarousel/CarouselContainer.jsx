import React from "react";
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import CarouselHead from "./CarouselHead";
import CarouselCard from "./CarouselCard"
import {firstCarouselData} from "../Api/FoodApi"


const carouselHeadText = ["What's on your mind ?"]


function CarouselContainer() {


  return (
    <>
      <section className="mt-15 " >
        {/* heading */}
        <CarouselHead text={carouselHeadText} />
        {/* Actual carousel */}
        <div className=" mt-5 ">
          <Carousel CardComponent={CarouselCard} data={firstCarouselData} itemtoShow={7} />
        </div>
      </section>
    </>
  );
}

export default CarouselContainer;
