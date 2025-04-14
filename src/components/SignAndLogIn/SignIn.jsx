import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function SignIn({ offToggle }) {
  const modalRef = useRef();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const handleClickOutside = (e) => {
      console.log(e,"this is event");
      console.log(modalRef.current,"ref value");
      
      // if modal exists & user clicked outside modal then close modal
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        offToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="border fixed w-[100vw] h-auto top-0   inset-0 bg-black opacity-80 z-30">
        {" "}
      </div>
      {/* actual LogIn page */}

      <div
        ref={modalRef}
        className={`  shadow-lg flex flex-col w-[30%] h-[700px]  px-15 py-30   bg-white fixed z-40 right-0 ml-auto
        top-0 transform transition-transform duration-400 ease-in ` }
        onBlur={offToggle}
      >
        <RxCross1
          className="text-2xl hover:cursor-pointer"
          onClick={offToggle}
        />
        {/* upper box */}
        <div className="flex justify-between items-center">
          {/* left text box */}
          <div>
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="font-medium">
              or <Link className="text-orange-600">create an account</Link>
            </p>
            <hr className="w-[20px] mt-5 font-bold" />
          </div>
          {/* right img box */}
          <div className=" w-30 h-25 ">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt=""
              className=" object-contain w-full h-full"
            />
          </div>
        </div>

        {/* lower box */}
        <div className="flex flex-col gap-2 mt-4">
          <input
            type="number"
            placeholder="Phone number"
            className="border py-5 px-5 "
            maxLength={10}
          />
          <div className="">
            <button className="bg-orange-600 text-white py-2 hover:cursor-pointer w-[100%] font-medium">
              LOGIN
            </button>
            <p className="text-[12px] font-medium text-gray-600">
              By clicking on Login, I accept the
              <span className="font-bold text-black">
                {" "}
                Terms & Conditions & Privacy Policy{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
