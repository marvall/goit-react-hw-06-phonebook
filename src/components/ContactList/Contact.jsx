import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./Contact.module.scss";

class Contact extends Component {
  state = {
    id: this.props.id,
  };
  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <li id={id} className={Style.contact}>
        <p>{name}</p>
        <p>{number}</p>
        <button
          className={Style.button}
          onClick={() => onDeleteContact(this.state.id)}
        >
          delete
        </button>
      </li>
    );
  }
}
Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
export default Contact;
