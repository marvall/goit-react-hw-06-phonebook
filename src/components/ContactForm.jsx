import { Component } from "react";
import PropTypes from "prop-types";
import Style from "./ContactForm.module.scss";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={Style.form}>
          <label className={Style.label}>
            Name{" "}
            <input
              className={Style.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={Style.label}>
            Number{" "}
            <input
              className={Style.input}
              type="tel"
              placeholder="999-99-99"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={Style.button}>
            add contact
          </button>
        </form>
      </>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
