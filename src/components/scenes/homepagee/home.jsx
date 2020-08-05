import React, { Component } from "react";
import "./style.scss";
import { Container } from "react-bootstrap";
import Header from "../header/header";
import ContactList from "../contactlist/contactlist";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container className="contact_page">
          <Header />
          <ContactList />
        </Container>
      </>
    );
  }
}
