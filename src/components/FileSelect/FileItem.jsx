

import React from 'react';
import './FileItem.css'; 
import FileContextMenu from '../FileContextMenu/FileContextMenu';



import { FaRegSquare, FaRegImage, FaMusic } from 'react-icons/fa';
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoFileZip } from "react-icons/go";
import { ImAndroid } from "react-icons/im";
import { BsFiletypeExe } from "react-icons/bs";



const ProgressBar = ({ percentage }) => (
  <>
  <p>{percentage}%</p>
  <div className="progress">
    
  <div className="progress-bar-background">
    <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
  </div>
  </div>
  </>
);



const getFileIcon = (filename) => {
  if (filename.endsWith('.png')) {
    return <FaRegImage className="fileImage"/>;
  } else if (filename.endsWith('.mp3')) {
    return <FaMusic className="music" />;
  } else if (filename.endsWith('.zip')) {
    return <GoFileZip className="zip" />
  }else if(filename.endsWith('.apk')){
return <ImAndroid className="apk" />
  } else if(filename.endsWith('.exe')){
    return <BsFiletypeExe className=".exe"/>
  }else{
 
    return <IoDocumentTextOutline />;
  }
};



const FileItem = ({ file, isSelected, onToggle ,onFileClick,isActive}) => {





 


  return (
    <>
   
    <div className="file-item">
      
      
      { isActive && <FileContextMenu file={file} />}

     

      <div className="file-column checkbox">
      <label className="custom-checkbox">
  <input 
   type="checkbox"
          id={`file-checkbox-${file.id}`}
          checked={isSelected}
          onChange={() => onToggle(file.id)}/>
  <span className="checkmark"></span>
</label>
      </div>
      <div className="file-column name">
      
      
        
        <label htmlFor={`file-checkbox-${file.id}`} className="file-label">
         <span className="icon1">{getFileIcon(file.name)} </span> 
          <span className="file-name"  onClick={(event) => onFileClick(file.id, event)}>{file.name}</span>

        </label>

      </div>
      <div className="file-column size">
        {file.size}
      </div>

      <div className="file-column status">
          {file.percentage > 0 ? (
         <ProgressBar percentage={file.percentage} />) : ( <p>{file.status === "complete" ? 'Complete' : <><FaRegSquare className="pause" />Paused</>}</p>)}
      </div>

      <div className="file-column TimeLeft">
        {file.timeLeft}
      </div>

      <div className="file-column LastModification">
        {file.lastModifications}
      </div>

    </div>
  
    </>
  );
};

export default FileItem;