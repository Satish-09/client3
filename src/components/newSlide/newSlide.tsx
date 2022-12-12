import React, { useState } from "react";
import "./newSlide.css";
import CondType from "./condType";
import Currency from "../Currency/currency";
import { Routes, Route, useNavigate } from "react-router-dom";
type togg = {
  toggleSlideover: () => void;
};
const NewSlide = (props: togg) => {
  const navigate = useNavigate();
  const [currencyflag, setCurrencyflag] = useState(false);
  const [nav, setNav] = useState(false);

  const currencyClick = () => {
    setCurrencyflag(true);
  };

  const nextClick = () => {
    if (currencyflag === true) {
      setNav(true);
      navigate("/Currency");
    }
  };
  const doneClick = () => {
    navigate("/CondType");
    props.toggleSlideover();
  };
  return (
    <div className="card">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <h4>
          <strong>Condition Builder</strong>
        </h4>
        <p>Build a condition to create a new Route</p>
      </div>

      {nav ? (
        <Currency doneClick={doneClick} />
      ) : (
        <CondType currencyClick={currencyClick} nextClick={nextClick} />
      )}
      <div></div>
    </div>
  );
};

export default NewSlide;
