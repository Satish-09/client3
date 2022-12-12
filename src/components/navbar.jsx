import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { VscPassFilled } from "react-icons/vsc";
import Dropdown from "./Dropdown";
import "./nav.css";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
 

  return (
    <nav className="primary-nav">
      <div>
        <a>
          <strong>Payments Workflow</strong>
        </a>
        <a>
         
          <VscPassFilled />
          <bold>SaveChanges</bold>
        </a>
        <button className="dropbtn">
          Draft
          <MdArrowDropDown />
        </button>
     
          <label>Method </label>
          <button>
            Card
            <MdArrowDropDown />
          </button>
        
     
      <button className="Publish">
      Publish
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
