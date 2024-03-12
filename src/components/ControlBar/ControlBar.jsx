// MainContent.js

import React from 'react';
import './ControlBar.css'; // Make sure this CSS file is created with the styles provided below
import { BiRightArrow } from "react-icons/bi";
import { IoStopOutline } from "react-icons/io5";
import { BiStopwatch } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdQueue } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { PiShareFatBold } from "react-icons/pi";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { GoLink } from "react-icons/go";

const ControlBar = () => {
  return (
  <>

  
      <div className="control-bar">

        <div className="control-bar-left">
          <div className="input-icon-group">

          <GoLink className="input-icon link-icon"  />
        <input type="text"className="input-with-icon" placeholder='Add Url'/>
        <div className="icon-background download-icon">
        <RiDownloadCloud2Line />
      </div>
          </div>
  
        <div>
        <BiRightArrow />
        <p className="control-button">Resume</p>
        
        </div>
        <div>
        <IoStopOutline />
        <p className="control-button">Stop</p>
       
        </div>
      <div>


      </div>
      <div>
      <BiStopwatch />
        <p className="control-button">Stop All</p>

      </div>
      
        </div>

        <div className="control-bar-right">
          <div>
          <MdDeleteForever />
          <p className="control-button">Delete</p>
          </div>
         <div>
         <IoSettingsOutline />
         <p className="control-button">Options</p>
         </div>
     <div>
      <div>
      <MdQueue />
      <p className="control-button">Queues</p>
      </div>
    
     </div>
          <div>
          <GrSchedules />
          <p className="control-button">Schedule</p>
          </div>
         <div>
         <PiShareFatBold />
         <p className="control-button">Share</p>
         </div>
         
        </div>

      </div>
     
   
  
    </>

  );
}

export default ControlBar;
