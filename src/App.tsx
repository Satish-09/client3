import React, { useState } from "react";
import NewSlide from "./components/newSlide/newSlide";
import CondType from "./components/newSlide/condType";
// import Navbar from "./components/navbar";
// import Newcondition from "./components/newcondition";
// import Currency from "./components/Currency/currency";
// import Box from "./components/Box/box";
// import SlideIn from "./components/slideIn/slideIn";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Routes, Route, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [startAnimation, setStartAnimation] = useState(false);
  
  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      ?.classList.toggle("invisible");
    document.getElementById("slideover-bg")?.classList.toggle("opacity-0");
    document.getElementById("slideover-bg")?.classList.toggle("opacity-50");
    document.getElementById("slideover")?.classList.toggle("translate-x-full");
   
  }

  return (
    <div className="workflow">
      <div className="w-screen h-screen flex items-center justify-center">
        <div
          onClick={toggleSlideover}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          New Condition
        </div>
        <div
          id="slideover-container"
          className="w-full h-full fixed inset-0 invisible"
        >
          <div
            id="slideover-bg"
            className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 opacity-60"
          ></div>
          <div
            id="slideover"
            // className="w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all translate-x-full"
          >
            {/* <div className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"> */}
              {/* <svg
                onClick={toggleSlideover}
                className="w-6 h-6"
                fill="blue"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              > */}
                {/* <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path> */}
              {/* </svg> */}
            {/* </div> */}
          </div>
          <NewSlide  toggleSlideover={toggleSlideover} />
        </div>
      </div>
    </div>
  );
}

export default App;
