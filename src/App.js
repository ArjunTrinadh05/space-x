import React from "react";
import { Header } from "./Components/Header/header";
import { Lunch } from "./Components/Lunch/lunch";
import { Launch } from "./Components/LunchList/Launch";
import "./styles.css";
function App() {
  return (
    <div>
      <Header />

      <Launch />
    </div>
  );
}

export default App;
