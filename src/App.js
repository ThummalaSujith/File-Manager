import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";

import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
       
        <Header />
    
     
      <div className="content-container">
        <Sidebar />

        <Main />
      </div>
    </div>
  );
}

export default App;
