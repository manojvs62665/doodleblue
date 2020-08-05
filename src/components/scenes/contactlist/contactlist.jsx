import React, { Component } from "react";
import "./style.scss";
import "semantic-ui-css/semantic.min.css";
import { Input, Container } from "semantic-ui-react";
import Add from "./add";
import View from "./view";
import Users from "../../data/doodleJSON.json";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: Users.members,
      results: [],
      query: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      this.resetSearch();
    }
  }

  search = (event) => {
    const { users } = this.state;
    const { value } = event.target;

    this.setState({ query: value });

    const results = users.filter((user) => {
      const regex = new RegExp(value, "gi");
      return user.name.match(regex);
    });

    this.setState({ results });
  };

  resetSearch = () => {
    const { users, query } = this.state;

    const results = users.filter((user) => {
      const regex = new RegExp(query, "gi");
      return user.name.match(regex);
    });

    this.setState({ results });
  };

  getUserById = (id) => {
    const { users } = this.state;
    const u = users.filter((user) => user.name === id);
    return u[0];
  };

  addRow = (user, id) => {
    const { users } = this.state;
    this.setState({ users: [...users, user] });
  };

  updateRow = (id, updatedUser) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user) => (user.name === id ? updatedUser : user)),
    });
  };

  render() {
    const { users, results, query } = this.state;
    const data = results.length === 0 && !query ? users : results;

    return (
      <Container>
        <div className="add_search">
          <Input
            icon="search"
            onChange={this.search}
            placeholder="Search contacts"
          />
          <Add addRow={this.addRow} />
        </div>
        <View
          data={data}
          updateRow={this.updateRow}
          getUserById={this.getUserById}
        />
      </Container>
    );
  }
}

export default ContactList;
