import React, { Component } from "react";

class Player extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        style={{
          border: "5px solid #FF69B4",
          backgroundColor: "pink",
          color: "hotpink",
          borderRadius: "20px",
          margin: "20px",
          padding: "10px",
        }}
      >
        <p>Player: {this.props.player.name}</p>
        <p>Country: {this.props.player.country}</p>
        <p>Searches: {this.props.player.searches}</p>
      </div>
    );
  }
}

export default Player;
