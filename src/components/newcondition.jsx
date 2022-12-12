import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./newConditon.css";
const Newcondition = ({handleSlide})=> {

  //const [startAnimation,setStartAnimation]=useState(false)
  return (
    <div className="btnclass">
     <button onClick={handleSlide}>
        <strong>
          <div>
            <BsFillPlusCircleFill />
          </div>
          New Condition
        </strong>
  </button>
    </div>
  );
}

export default Newcondition;
