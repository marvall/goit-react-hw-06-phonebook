import Style from "./Filter.module.scss";
import { useState } from "react";
import { connect } from "react-redux";
import { contactFiletr } from "../redux/contacts/contacts-actions";

function Filter({ filterContact }) {
  const [filterQuery, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    filterContact(String(filterQuery));
  };
  return (
    <>
      <form className={Style.form} onSubmit={handleSubmit}>
        <label>
          <h3>Find contacts by name:</h3>
          <input
            type="text"
            value={filterQuery}
            onChange={handleChange}
            className={Style.input}
          />
        </label>
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterContact: (filter) => dispatch(contactFiletr(filter)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
