import React from "react";
import { Header } from "./Components/Header/header";
import { Lunch } from "./Components/Lunch/lunch";
import "./styles.css";
function App() {
  return (
    <div>
      <Header />
      <Lunch
        title="FalconSat"
        date="2006-03-25T10:30:00+12:0"
        des=" Successful first stage burn and transition to second stage, maximum
            altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed
            to reach orbit, Failed to recover first stage"
        img="https://farm5.staticflickr.com/4751/39557026242_384d287045_o.jpg"
      />
    </div>
  );
}

export default App;
