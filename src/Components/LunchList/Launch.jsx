import React from "react";
import { Lunch } from "../Lunch/lunch";
import "./styles.css";
import axios from "axios";
export class Launch extends React.Component {
  state = {
    Data: [],
  };
  componentDidMount = () => {
    this.getLaunch();
  };
  getLaunch = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        this.setState({
          Data: response.data,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  };
  launchlist = () => {
    const x = this.state.Data.map((lunchs,index) => {
      const image =
        lunchs.links.flickr_images == 0
          ? "https://media.timeout.com/images/105653190/image.jpg"
          : lunchs.links.flickr_images[0];
      let Details =
        lunchs.details == undefined ? "No Details Avaliable" : lunchs.details;
      if (lunchs.links.flickr_images == 0) {
        Details = Details + "  ->" + "this is Not Original Image";
      }
      return (
        <Lunch
          key = {`lunchs_${index}`}
          title={lunchs.mission_name}
          date={lunchs.launch_date_local}
          des={Details}
          img={image}
        />
      );
    });
    return x;
  };
  render() {
    return <div className="LunchList">{this.launchlist()}</div>;
  }
}
/* const Launching = this.state.Data.map((Data) => {
      return (
        <Launch
          title="FalconSat"
          date="2006-03-25T10:30:00+12:0"
          des=" Successful first stage burn and transition to second stage, maximum
            altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed
            to reach orbit, Failed to recover first stage"
          img="https://farm5.staticflickr.com/4751/39557026242_384d287045_o.jpg"
        />
      );
    });
    */
