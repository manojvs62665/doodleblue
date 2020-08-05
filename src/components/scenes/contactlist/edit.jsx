import React, { Component } from "react";
import "./style.scss";
import { Form, Modal, Button, Grid } from "semantic-ui-react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        name: "",
        email: "",
        company: "",
        address: "",
        phone: "",
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      const user = this.props.getUserById(this.props.id);

      this.setState({
        form: {
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company,
          phone: user.phone,
          address: user.address,
        },
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, company, phone, address } = this.state.form;
    const { updateRow } = this.props;

    const updatedUser = {
      name,
      email,
      company,
      phone,
      address,
    };

    updateRow(this.props.id, updatedUser);
    this.props.onClose();
  };

  render() {
    const { name, email, phone, company, address } = this.state.form;
    const { isOpen, onClose } = this.props;

    return (
      <Modal open={isOpen} onClose={onClose} closeIcon>
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Grid container columns={2} stackable>
              <Grid.Column>
                <Form.Field>
                  <Form.Input
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    autoFocus={true}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    label="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    label="Phone number"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <Form.Input
                    label="Company"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    label="Address"
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Button
                type="submit"
                content="Submit"
                className="submit_btn"
                positive
              />
            </Grid>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Edit;
