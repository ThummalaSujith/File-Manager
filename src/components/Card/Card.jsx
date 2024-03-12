import React from "react";
import "./Card.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdStorage } from "react-icons/md";

const Card = () => {
  return (
    <>
      <div className="card-container">
         <div className="first-row">
           <div className="disk-icon">
            <MdStorage />
          </div>
          <div className="title">DiskSpace</div>
          <div className="dot-icon">
            <HiOutlineDotsHorizontal />
          </div>
         </div>

       
          <div role="progressbar" className="progress">
            <span className="emoji" role="img" aria-label="sad emoji">
              😔
            </span>
          </div>
          <div className="zero-hun">
            <p>0%</p>
            <p>100%</p>
          </div>
          <div>
            <p className="per">90%</p>
            <p>c:\Downloads</p>
          </div>
          <div className="percentage">
            
            <p className="Disk-cleaner">Disk Cleaner</p>
          </div>

         
      </div>
    </>
  );
};

export default Card;
