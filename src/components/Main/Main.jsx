import React from 'react';
import ControlBar from '../ControlBar/ControlBar';
import './Main.css'

import FileList from '../FileSelect/FileList';
const Main = () => {
    return(
        <div className="main">
<ControlBar/>
<FileList/>
        </div>
    )
}

export default Main;