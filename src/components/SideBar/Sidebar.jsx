import React, { useState } from 'react';
import './Sidebar.css'; // Make sure this path is correct and the CSS file exists
import { IoMdMusicalNotes } from "react-icons/io";
import { GoFileZip } from "react-icons/go";
import { IoIosVideocam } from "react-icons/io";
import { CiBarcode } from "react-icons/ci";
import { IoMdDocument } from "react-icons/io";
import { GiVintageRobot } from "react-icons/gi";
import { PiImageSquare } from "react-icons/pi";
import { MdFolderCopy } from "react-icons/md";
import { ImFolderDownload } from "react-icons/im";
import { ImFolderUpload } from "react-icons/im";
import Card from '../Card/Card';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const Sidebar = () => {
  const [showDownloads, setShowDownloads] = useState(false);
  const [showUnfinished, setShowUnfinished] = useState(false);
  const [showFinished, setShowFinished] = useState(false);

  const toggleDownloads = () => {
    setShowDownloads(!showDownloads);
  };

  const toggleUnfinished = () => {
    setShowUnfinished(!showUnfinished);
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={toggleDownloads}>
        {/* Replace with an actual icon */}
        <div className="sidebar-item-icon"><MdFolderCopy /></div>
        <div className="sidebar-item-text">All Downloads </div>
        {showDownloads?<MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
      </div>

      {showDownloads && (
        <div className="sidebar-subitems">
          <div>
          <IoMdMusicalNotes />
          <p>Music</p>
          </div>
          <div>
          <GoFileZip />
          <p>Compressed</p>
          </div>

          <div>
          <IoIosVideocam />
          <p>Videos</p>
          </div>
          
          <div>
          <CiBarcode />
          <p>Programs</p>
            </div>
        <div>
        <IoMdDocument />
        <p>Documents</p>
        </div>
         <div>
         <GiVintageRobot />
         <p>APKs</p>
         </div>
         <div>
         <PiImageSquare />
         <p>Images</p>
         </div>
         
        </div>
      )}
      <div className="sidebar-item" onClick={toggleUnfinished}>
        {/* Replace with an actual icon */}
        <div className="sidebar-item-icon"><ImFolderDownload /></div>
        <div className="sidebar-item-text">Unfinished</div>
        {showUnfinished?<MdOutlineKeyboardArrowDown />:<MdOutlineKeyboardArrowUp />}
      </div>
      {showUnfinished && (
        <div className="sidebar-subitems">
          {/* List of Unfinished items */}
        </div>
      )}
      <div className="sidebar-item" onClick={toggleFinished}>
        {/* Replace with an actual icon */}
        <div className="sidebar-item-icon"><ImFolderUpload /></div>
        <div className="sidebar-item-text">Finished</div>
        {showFinished?<MdOutlineKeyboardArrowDown />:<MdOutlineKeyboardArrowUp />}
      </div>
      {showFinished && (
        <div className="sidebar-subitems">
          {/* List of Finished items */}
        </div>
      )}

      <Card/>
    </div>
  );
}

export default Sidebar;


