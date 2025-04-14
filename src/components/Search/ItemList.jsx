import React from "react";

function ItemList({item}) {
  return (
    <>
      <li className="list-none flex items-center gap-5 py-2 px-2  hover:bg-gray-100 hover:cursor-pointer ">
        <div className=" w-18 h-18">
          <img
            src={item.imgSrc}
            alt={item.headingText}
            className="object-cover w-[100%] h-[100%] rounded-[5px]"
          />
        </div>
        <div>{item.headingText}</div>
      </li>
    </>
  );
}

export default ItemList;
