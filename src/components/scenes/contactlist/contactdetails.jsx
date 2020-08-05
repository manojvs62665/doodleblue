import React, { Component } from "react";

export default class Contactdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>{this.props.profileDetails && <div>{this.props.name}</div>}</div>
      </>
    );
  }
}
