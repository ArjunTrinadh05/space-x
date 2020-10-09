import React, { Component } from "react";
import axios from "axios";
import {withRouter} from "react-router"
import "./styles.css";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
export class LaunchView extends React.Component {
  state = {
      launch: {
        links:{
          flickr_images: []
        }
      },
  };
  componentDidMount = () => {
    const FlightNo = this.props.match.params.Flight_number;
    this.getLaunch(FlightNo);
  };
  getLaunch = (FlightNo) => {
    axios.get("https://api.spacexdata.com/v3/launches/"+FlightNo).then((response)=>{
    this.setState({
        launch: response.data,
    })
    }).catch((error)=>{
    console.log("failed");
    })
  };
   info = (title,key) => {
     const deew = this.state.launch[key]
     return(
        <div className="data"><h2>{title}: {deew}</h2></div>
     )
   }
  render() {
    console.log(this.state.launch.links.flickr_images)
    const hasImages = this.state.launch.links.flickr_images.length !== 0;
    return (<div>
      {this.info("Mission Name","mission_name")}
      {this.info("Flight Number","flight_number")}
      {this.info("lunch year","launch_year")}
{
     hasImages && (
       <Zoom {...zoomInProperties}>
        {this.state.launch.links.flickr_images.map((each, index) => (
          <div key={index} style={{width: "50%"}}>
            <img style={{ width: "60%",height:"60%" }} src={each} />
          </div>
        ))}
      </Zoom>)
  }
          <p>{this.state.launch.details}</p>
       </div>
       
       );
  }
}
export default withRouter(LaunchView);