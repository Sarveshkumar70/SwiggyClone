import React from "react";
import { SiSwiggy } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const footerListData = [
  {
    heading: "Company",
    items: [
      "About Us",
      "Swiggy Corporate",
      "Careers",
      "Team",
      "Swiggy One",
      "Swiggy Instamart",
      "Swiggy Dineout",
      "Swiggy Genie",
      "Minis",
      "Pyng",
    ],
  },
  {
    heading: "Contact us",
    items: ["Help & Support", "Partner with us", "Ride with us"],
  },
  {
    heading: "Available in:",
    items: ["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"],
  },
  {
    heading: "Life at Swiggy",
    items: ["Explore with Swiggy", "Swiggy News", "Snackables"],
  },
  {
    heading: "Legal",
    items: [
      "Terms & Conditions",
      "Cookie Policy",
      "Privacy Policy",
      "Investor Relations",
    ],
  },
];

// for copyright Year
let dateNow = new Date();

function FooterContainer() {
  let location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <footer className=" py-5  ">
          {/* top box */}
          <div className=" flex flex-col xl:flex-row justify-center items-center gap-5 mt-5 ">
            <h3 className="sm:text-2xl font-bold">
              For better experience, download the Swiggy app now
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="w-50 h-auto ">
                <img
                  className="w-[100%] h-[100%]  object-contain "
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                  alt="Google play"
                />
              </div>
              <div className="w-50 h-auto ">
                <img
                  className="w-[100%] h-[100%]  object-contain"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                  alt="App Store"
                />
              </div>
            </div>
          </div>
          {/* bottom box */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  mt-12 py-5 gap-6 ">
            {/* logo box */}
            <div className="flex justify-center  ">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center">
                  <SiSwiggy className="text-orange-500 " size={60} />
                  <h3 className="text-orange-600 text-2xl font-bold">Swiggy</h3>
                </div>
                <p className="text-gray-700">
                  &#169; {dateNow.getFullYear()} Swiggy Limited
                </p>
              </div>
            </div>
            {/* list boxes */}
            {footerListData?.map((section, index) => {
              return (
                <div
                  key={index}
                  className={`  px-10  ${
                    section.heading === "Legal" ? `xl:col-start-3` : ""
                  }`}
                >
                  <h3 className="font-bold text-left text-lg py-1 cursor-pointer ">
                    {section.heading}
                  </h3>
                  <ul >
                  {section?.items?.map((item, index) => (
                      <li key={index} className="text-gray-400 py-1 font-semibold cursor-pointer">
                        {item}
                      </li>
                  ))}
                  </ul>
                </div>
              );
            })}

            {/* social links */}
            <div className="xl:col-start-5 px-10">
              <h3 className="font-semibold mb-3">Social Links</h3>
              <div className="flex gap-3 text-xl  hover:cursor-pointer">
                <FaLinkedin />
                <FaInstagram />
                <FaFacebookF />
                <FaPinterest />
                <FaTwitter />
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default FooterContainer;
