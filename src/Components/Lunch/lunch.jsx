import React from "react";
import "./styles.css";
export class Lunch extends React.Component {
  render() {
    return (
      <div className="lunch">
        <img alt="launch" src={this.props.img} />
        <div className="content">
          <div className="info">
            <h1>{this.props.title}</h1>
            <h1>{this.props.date}</h1>
          </div>
          <p>{this.props.des}</p>
        </div>
      </div>
    );
  }
}
