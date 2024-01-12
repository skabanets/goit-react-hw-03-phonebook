import React, { Component } from 'react';
import { Form, FormButton, Input, InputLabel } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <InputLabel>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
            placeholder="Enter contact name"
            minLength={3}
          />
        </InputLabel>
        <InputLabel>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
            minLength={9}
            maxLength={13}
            placeholder="Enter phone number"
          />
        </InputLabel>
        <FormButton>Add contact</FormButton>
      </Form>
    );
  }
}
