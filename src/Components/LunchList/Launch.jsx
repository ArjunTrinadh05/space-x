import React from "react";
import { Lunch } from "../Lunch/lunch";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <Link key={`lunchs_${index}`} to={"/LunchView/"+lunchs.flight_number}>
          <Lunch
            title={lunchs.mission_name}
            date={lunchs.launch_date_local}
            des={Details}
            img={image}
          />
        </Link>
      );
    });
    return x;
  };
  render() {
    return <div className="LunchList">{this.launchlist()}</div>;
  }
}
