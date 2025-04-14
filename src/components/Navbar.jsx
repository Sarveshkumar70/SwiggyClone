import React, { useState } from "react";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoSearchSharp, IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { SiSwiggy } from "react-icons/si";
import { Link } from "react-router-dom";
import SignIn from "../components/SignAndLogIn/SignIn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [signInToggle, setSignInToggle] = useState(false);

  // nav links
  const links = [
    { name: "Swiggy Corporate", icon: <RiShoppingBagLine />, href: "#" },
    { name: "Search", icon: <IoSearchSharp />, href: "/search" },
    { name: "Offers", icon: <BiSolidOffer />, href: "#" },
    { name: "Help", icon: <IoHelpBuoyOutline />, href: "#" },
    {
      name: "Sign In",
      icon: <FaSignInAlt />,
      href: "#",
      onClick: () => setSignInToggle(true),
    },
    { name: "Cart", icon: <BsCart3 />, href: "#" },
  ];

  return (
    <>
      <header className="bg-white py-3  shadow-md fixed w-[100%] z-10 top-0  ">
        <div className="container w-[80%] sm:w-[100%] lg:w-[90%]  xl:w-[80%] mx-auto  flex justify-between  items-center py-1 lg:py-2 ">
          {/* Logo */}
          <Link
            to={"/"}
            className="text-[40px] font-bold  bg-orange-500 text-white rounded-[12px] hover:scale-110 transition delay-100 ease-in"
          >
            <SiSwiggy className="m-1 font-bold" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-10 font-bold">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={link?.onClick}
                className="flex flex-row items-center text-gray-700 gap-1 relative transition duration-200 lg:text-[16.5px] hover:text-orange-500 "
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
                {/* {link.name === 'Offers' && <span className="text-sm absolute -top-3 -right-5 text-yellow-500" >New</span> } */}
                {link.name === "Offers" && (
                  <sup className="text-[14px]  text-yellow-500">New</sup>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden flex flex-col bg-gray-100 mt-2 rounded-lg shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center text-gray-700 gap-2 p-3 mx-4 hover:bg-gray-200 rounded transition duration-200"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </header>

      {signInToggle && <SignIn offToggle={() => setSignInToggle(false)} />}
    </>
  );
};

export default Navbar;
