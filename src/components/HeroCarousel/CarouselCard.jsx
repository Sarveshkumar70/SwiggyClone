import React from 'react'

function CarouselCard({item}) {
  // console.log(item,"inside carouse");
  
  return (
    <>
        <div key={item.id} className="hover:cursor-pointer ">
            <div className=" w-35 h-35 mx-auto ">
              <img
                className="object-cover w-[100%] h-[100%]  "
                src={item.ImgSrc}
                alt={item.altText}
              />
            </div>
          </div>
    </>
  )
}

export default CarouselCard