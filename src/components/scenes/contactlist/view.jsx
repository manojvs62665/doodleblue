import React, { Component } from "react";
import "./style.scss";
import {
  Table,
  Button,
  Checkbox,
  Image,
  Grid,
  Segment,
} from "semantic-ui-react";
import Edit from "./edit";
import ContactDetails from "./contactdetails";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      id: "",
      profile_detail: 0,
    };
  }

  profileDetails = (value) => {
    this.setState({
      profile_detail: value,
    });
  };

  onClose = () => {
    this.setState({ isOpen: true });
  };

  onOpen = () => {
    this.setState({ isOpen: true, id: this.props.id });
  };

  render() {
    const { isOpen, id } = this.state;
    const { data, deleteRow, updateRow, getUserById } = this.props;

    return (
      <div>
        <Edit
          onClose={this.onClose}
          isOpen={isOpen}
          id={id}
          updateRow={updateRow}
          getUserById={getUserById}
        />
        <Grid container columns={2} stackable>
          <Grid.Column>
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>+</Table.HeaderCell>
                  <Table.HeaderCell className="basic_info">
                    Basic info
                  </Table.HeaderCell>
                  <Table.HeaderCell className="company">
                    Company
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map((user, id) => (
                  <Table.Row
                    key={id}
                    onClick={() => this.profileDetails(user.id)}
                  >
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="name_cell">
                      <Grid.Row>
                        {" "}
                        <i className="fa fa-user-circle"></i>
                        <div>
                          {user.id}
                          {user.name}
                          <p>{user.email}</p>
                        </div>
                      </Grid.Row>
                    </Table.Cell>

                    <Table.Cell className="company_name">
                      {user.company}
                    </Table.Cell>
                    <Table.Cell>
                      {/* <Button
                          content="Edit"
                          onClick={() => {
                            this.setState({ isOpen: true, id: user.name });
                          }}
                        /> */}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column>
            {data.map((user, id) => (
              <div key={id}>
                <ContactDetails
                  profileDetails={this.state.profile_detail === user.id}
                  name={user.name}
                />
              </div>
            ))}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default View;
