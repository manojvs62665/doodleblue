import React, { Component } from "react";
import "./style.scss";
import { Container, Col, Row } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container className="header_content">
          <Row>
            <div>
              <i className="fa fa-address-book"></i>
            </div>
            <div className="con_heading">
              <h3>Contacts</h3>
              <p>Welcome to FlatCRM Contact page</p>
            </div>
            <p className="sort_text">Sort by:</p>
            <select>
              <option>Date Created</option>
              <option></option>
            </select>
          </Row>
        </Container>
      </>
    );
  }
}
