import React from "react";
import { Input } from "@material-tailwind/react";
import "./Currency.css";
type done = {
  doneClick: () => void;
};
const Currency = (props: done) => {
  return (
    <div className="CurrencyType">
      <p>
        <strong>Define routing Condition(s)</strong>
      </p>

      <div className="Currencytypes">
        <div className="CurrencySelecter">
          <h3>$ Currency</h3>
          <div className="w-66">
            <Input  />
          </div>
        </div>
        <button className="Done" onClick={props.doneClick}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Currency;
