import { useState } from "react";
import propTypes from "prop-types";
import Style from "./ContactForm.module.scss";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const handleChange = (event) => {
    if (event.currentTarget.name === "name") {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === "number") {
      setNumber(event.currentTarget.value);
    }
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={Style.form}>
        <label className={Style.label}>
          Name{" "}
          <input
            className={Style.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={Style.label}>
          Number{" "}
          <input
            className={Style.input}
            type="tel"
            placeholder="999-99-99"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={Style.button}>
          add contact
        </button>
      </form>
    </>
  );
}
ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
export default ContactForm;
