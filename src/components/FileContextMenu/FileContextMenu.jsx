import React from "react"
import './FileContextMenu.css'
import { CiFileOn } from "react-icons/ci";
import { FaFolderOpen } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";
import { FaFileArrowDown } from "react-icons/fa6";
import { FaFileMedical } from "react-icons/fa";
import { BsArrowClockwise } from "react-icons/bs";
import { CiStop1 } from "react-icons/ci";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { MdOutlineQueue } from "react-icons/md";
import { MdRemoveFromQueue } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";

const FileContextMenu=({file})=>{
 
   

    return(
        <>
       {file.id && <div className="context-card" >

           <div className="open">
           <CiFileOn />
           <p>Open</p>
            </div> 
            
            <div className="OpenWith">
            <FaFileMedical />
            <p>Open with</p>
            </div>

            <div className="Openfolder">
            <FaFolderOpen />
            <p>Open Folder</p>

            </div>
            
           <div className="Move">
           <FaFileSignature />
           <p>Move/Rename</p>
           </div>
           <div className="Re-download">
           <FaFileArrowDown />
           <p>Redownload</p>
           </div>
           <div className="Resume-download">
           <BsArrowClockwise />
           <p>Resume download</p>
           </div>
           <div className="stop-download">
           <CiStop1 />
           <p>Stop Download</p>
           </div>

           <div className="refresh">
           <PiArrowsCounterClockwiseBold />
           <p>Refresh Download Address</p>
           </div>
           
           <div className="AddQueue">
           <MdOutlineQueue />
           <p>Add to queue</p>
           </div>
           
           <div className="DeleteQueue">
           <MdRemoveFromQueue />
           <p>Delete from queue</p>
           </div>
         
         <div className="properties">
         <FaRegRectangleList />
         <p>Properties</p>

         </div>
          

        </div>} 
        </>
    )
}

export default FileContextMenu