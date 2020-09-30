import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from '../../styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

  resetState = () => {
    this.setState(INITIAL_STATE);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      const NewContact = { name, number };

      this.props.onAddContact(NewContact);
      this.resetState();
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <s.Form onSubmit={this.handleSubmit}>
          <s.Label>
            Name
            <s.Input
              type="text"
              placeholder="Сontact name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </s.Label>
          <s.Label>
            Number
            <s.Input
              type="number"
              placeholder="Сontact number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </s.Label>

          <s.Button type="submit">Add contact</s.Button>
        </s.Form>
      </>
    );
  }
}
