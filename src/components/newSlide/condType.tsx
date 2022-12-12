import React,{useState} from "react";
import "./newSlide.css";
import { BsTag } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { type } from "@testing-library/user-event/dist/type";
//import { Routes, Route } from "react-router-dom";
type props = {
  currencyClick:()=> void
  nextClick:()=> void
}

const CondType = ({currencyClick,nextClick}:props) => {
  
    const [amountflag,setAmountflag] = useState(false)
   const [color, setColor] = useState("lightblue")
//   const currencyClick = () => {
//       setFlag(true)
   
//   };

  return (
    <div className="CondType">
      <p>
        <strong>Select the Condition type(s)</strong>
      </p>
      <div className="Checktypes">
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full">
          <BsTag /> Amount{" "}
        </button></div>
        <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={currencyClick}>
          <BsCurrencyDollar />
          Currency{" "}
        </button></div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <HiOutlineDatabase />
          Metadata{" "}
        </button>
      </div>
       
      <button className="next" onClick={nextClick}>
      Next
     </button>
    </div>
  );
};

export default CondType;
