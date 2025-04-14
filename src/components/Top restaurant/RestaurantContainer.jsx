import React from 'react'
import CarouselHead from '../HeroCarousel/CarouselHead'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Carousel from "../HeroCarousel/Carousel"
import RestaurantCard from './RestaurantCard';
import {restautrantData} from "../Api/FoodApi"

const carouselHeadText = ["Top restaurant chains in Chhindwara"]



function RestaurantContainer() {

  localStorage.setItem("restautrantData",JSON.stringify(restautrantData))

  return (
    <>
    <div className=' mt-12' >
        <CarouselHead text={carouselHeadText} />

      <div className='mt-5   '  >
        <Carousel CardComponent={RestaurantCard} data={restautrantData} itemtoShow={4} />
      </div>
    </div>
    </>
  )
}

export default RestaurantContainer