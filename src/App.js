import React from "react";
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Header } from "./Components/Header/header";
import { Launch } from "./Components/LunchList/Launch";
import  LaunchView  from "./Components/LunchView/LunchView";
import "./styles.css";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/LunchView/:Flight_number">
            <LaunchView />
          </Route>
          <Route path="/">
            <Launch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
