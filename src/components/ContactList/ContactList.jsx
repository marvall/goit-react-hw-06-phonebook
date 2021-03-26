import { connect } from "react-redux";
import Contact from "./Contact";
import Style from "./ContactList.module.scss";

function ContactList({ contacts }) {
  const filterContacts = (contacts) => {
    if (contacts.filter !== "") {
      return contacts.items.filter(({ name }) =>
        name.includes(contacts.filter)
      );
    } else {
      return contacts.items;
    }
  };
  return (
    <ul className={Style.contacrList}>
      {filterContacts(contacts).map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, null)(ContactList);
