import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import image from "./filemanager.webp"
const Header = () => {
  return (
    <div className="header">
      <div className="combine">

          <div className="header-logo">
            <img src={image} alt="file-manager"/>
            <p>Internet Download Manager 10.36</p>
            </div>

        <div className="header-menu">
          <span>Tasks</span>
          <span>File</span>
          <span>Downloads</span>
          <span>View</span>
          <span>Help</span>
        </div>

        </div>

        

      
      <div className="search">
        <div className="search-container">
          <CiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search in the List"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
