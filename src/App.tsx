import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App h-screen dark:bg-[#000108]">
        <NavBar/>
      </div>
    </Router>
  );
}

export default App;
