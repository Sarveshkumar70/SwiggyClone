import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ItemList from "./ItemList";
import PopularCuisine from "./PopularCuisine";
import {carouselData} from "../Api/FoodApi"

function SearchFood() {

  // toggling b/w search
  const [showResult, setShowResult] = useState(false);

  const [inputData, setInputData] = useState("");

  const handleInputData = (e) => {
    let value = e.target.value.trim();
    setInputData(value);
  };

  const filterData = carouselData.filter((item) => {
    return item.headingText.toLowerCase().includes(inputData.toLowerCase());
  });


  return (
    <section className="mt-20 py-10">
      {/* search box + search results */}
      <div className="w-[80%] sm:w-[50%]  mx-auto">
        {/* actual search box */}
        <div className="border  mx-auto flex justify-between items-center py-2 rounded-[3px]">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className={`w-full px-2 outline-0 font-semibold  `}
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
            value={inputData}
            onChange={(e) => handleInputData(e)}
          />
          <span className="pe-4 text-xl ">
            <CiSearch />
          </span>
        </div>
        {/* result box */}
        {showResult ? (
          <div>
            {filterData.length > 0 &&
              filterData.map((item) => {
                return (
                 <ItemList key={item.id} item={item} />
                );
              })}
          </div>
        ): (
          <PopularCuisine/>
        )
      }
      </div>

    </section>
  );
}

export default SearchFood;
