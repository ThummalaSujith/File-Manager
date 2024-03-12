// FileList.js

import React, { useState } from 'react';
import FileItem from './FileItem';
import { FaRegImage } from "react-icons/fa6";
import SpeedTest from '../Speed/SpeedTest';
import "./FileSelect.css"
import { CiSaveDown1 } from "react-icons/ci";
import { BsArrowUpCircle } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";

const initialFiles = [
 
  { id: 1, image:<FaRegImage />, name: 'UIUXMonster.png', size: '745 KB' ,status:"complete",timeLeft:"0 Sec",lastModifications:"2023/08/09"},
  { id: 2, name: '2pacCover.mp3', size: '3.00 MB',status:"",percentage:80,timeLeft:"0 Sec",lastModifications:"2023/08/09" },
  {id:3,name:'UIUXMonster.zip' ,size:"12.00MB",status:"complete",timeLeft:"0 Sec",lastModifications:"2023/08/09"},
  {id:4,name:'Details.pdf' ,size:"12.00MB",status:"",percentage:50,timeLeft:"5min 12sec",lastModifications:"2023/08/09"},
  {id:5,name:'BetterCall Saul.s02E10.720p.mp3' ,size:"12.00MB",status:"complete",timeLeft:"0 Sec",lastModifications:"2023/08/09"},
  {id:6,name:'Call Of Duty.apk' ,size:"12.00MB",status:"",percentage:10,timeLeft:"0 Sec",lastModifications:"2023/08/09"},
  {id:7,name:'2pacCover.mp3' ,size:"12.00MB",status:"",percentage:0,timeLeft:"0 Sec",lastModifications:"Today"},
  {id:8,name:'Mima.exe' ,size:"12.00MB",status:"complete",timeLeft:"0 Sec",lastModifications:"2023/08/09"},
 
];





const FileList = () => {
  const [selectedFiles, setSelectedFiles] = useState({});

  const [activeFileId, setActiveFileId] = useState(null);
  

  const handleFileClick = (id,event) => {
    setActiveFileId(prevId => prevId === id ? null : id);
  
};

  const toggleFileSelection = (id) => {
    setSelectedFiles((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [id]: !prevSelectedFiles[id],
    }));
  };

  return (
    <div>
     
     <div className="heading" >
     <label className="custom-checkbox">
  <input type="checkbox" id="checkbox" />
  <span className="checkmark"></span>
</label>
        <div>

         <p>Name</p> 
         <TiArrowUnsorted  className="ti-arrow"/>
        </div>
        <div >
         <p>Size</p>
         <TiArrowUnsorted className="ti-arrow"/>
        </div>
        <div >
         <p>Status</p>
         <TiArrowUnsorted className="ti-arrow"/>
        </div>
        <div >
         <p>Time Left</p>
         <TiArrowUnsorted className="ti-arrow"/>
        </div>
        <div >
         <p>Last Modifications</p>
         <TiArrowUnsorted className="ti-arrow" />
        </div>
      </div>


      {initialFiles.map((file) => (
        <FileItem
          key={file.id}
          file={file}
          isSelected={!!selectedFiles[file.id]}
          onToggle={toggleFileSelection}
          onFileClick={()=>handleFileClick(file.id)}
          isActive={file.id === activeFileId}
        />
      ))}

      <div className="footer">
        <div >
        <label className="custom-checkbox">
  <input type="checkbox" id="checkbox" />
  <span className="checkmark"></span>
</label>
        </div>
        <div >
        
          <p>Select All</p>
        </div>
    <div></div>
        <div className="Speed">
        <SpeedTest/>
          <p>Speed Test</p>
        </div>
        <div>
        <CiSaveDown1 className="down"/>
          <p>10.55 <span>Mbs</span></p>
        </div>
        <div>
        <BsArrowUpCircle  className="up"/>
          <p>6.30 <span>Mbs</span></p>
        </div>
      </div>
    </div>
  );
};

export default FileList;
