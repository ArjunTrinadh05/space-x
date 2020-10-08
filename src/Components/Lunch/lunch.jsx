import React from "react";
import "./styles.css";
export class Lunch extends React.Component {
  render() {
    return (
      <div className="lunch">
        <img alt="launch" src={this.props.img} />
        <div className="content">
          <div className="info">
            <h2>{this.props.title}</h2>
            <h2>{this.props.date}</h2>
          </div>
          <p>{this.props.des}</p>
        </div>
      </div>
    );
  }
}
