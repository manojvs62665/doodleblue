import React, { Component } from "react";
import "./style.scss";
import { Form, Modal, Button, Grid } from "semantic-ui-react";

class Add extends Component {
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

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { id, name, email, address, company, phone } = this.state.form;
    const { addRow } = this.props;

    const newUser = {
      id,
      name,
      email,
      company,
      address,
      phone,
    };

    addRow(newUser);
    this.setState({ form: this.state.form });
  };

  render() {
    const { id, name, company, phone, address, email } = this.state.form;

    return (
      <Modal
        trigger={<Button className="add_btn" content="+ Add Contact" />}
        closeIcon
        size="small"
        basic
      >
        <Modal.Content>
          <h2>Add contact details</h2>
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
                disabled={!name || !email || !phone || !company || !address}
              />
            </Grid>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Add;
