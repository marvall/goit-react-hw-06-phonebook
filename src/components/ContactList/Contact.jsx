import { useState } from "react";
import PropTypes from "prop-types";
import Style from "./Contact.module.scss";
import { connect } from "react-redux";
import { contactDelete } from "../../redux/contacts/contacts-actions";

function Contact({ id, name, number, deleteContact }) {
  // eslint-disable-next-line no-unused-vars
  const [currentID, setID] = useState(id);
  return (
    <li id={id} className={Style.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={Style.button} onClick={() => deleteContact(currentID)}>
        delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(contactDelete(id)),
  };
};

export default connect(null, mapDispatchToProps)(Contact);
