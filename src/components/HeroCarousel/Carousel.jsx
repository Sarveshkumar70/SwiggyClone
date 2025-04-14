import React from "react";
import Slider from "react-slick";

function Responsive({CardComponent,data,itemtoShow}) {
  // console.log(data,"dtata s ");
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemtoShow,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container  ">
      <Slider {...settings}>
        {data?.map((item)=>
        <CardComponent key={item.id} item={item}/>
        )}
      </Slider>
    </div>
  );
}

export default Responsive;
