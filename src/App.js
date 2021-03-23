/* eslint-disable no-undef */
import React from "react";

import { connect } from "react-redux";
import { contactDelete, contactAdd } from "./redux/actions/actions";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList/ContactList";

function App({ contacts, deleteContact, addContact }) {
  console.log(contacts);
  //addContact = (data) => {
  //  const { name, number } = data;
  //  if (this.isContactExist(name)) {
  //    const id = uuid();
  //    this.setState(({ contacts }) => ({
  //      contacts: [{ id: id, name: name, number: number }, ...contacts],
  //    }));
  //  }
  //};
  //deleteContact = (contactId) => {
  //  this.setState((prevState) => ({
  //    contacts: prevState.contacts.filter(
  //      (contact) => contact.id !== contactId
  //    ),
  //  }));
  //};

  //isContactExist = (contactName) => {
  //  const { contacts } = this.state;
  //  let contactExist = true;
  //
  //  contacts.forEach(({ name }) => {
  //    if (name.toLowerCase() === contactName.toLowerCase()) {
  //      alert(`${contactName} is already in contacts`);
  //      contactExist = false;
  //    }
  //  });
  //
  //  return contactExist;
  //};
  //filterHandler = (event) => {
  //  this.setState({ filter: event.currentTarget.value });
  //};
  const filterContacts = (contacts) => {
    const { items, filter } = contacts;
    if (filter !== "") {
      return items.filter(({ name }) => name.includes(filter));
    } else {
      return items;
    }
  };
  ////========= life-cycle the component =========
  //componentDidUpdate(prevProps, prevState) {
  //  if (this.state.contacts !== prevState.contacts) {
  //    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //  }
  //}
  //componentDidMount() {
  //  const contactsGot = JSON.parse(localStorage.getItem("contacts"));
  //  if (contactsGot === null) {
  //    this.setState({ contacts: [] });
  //  } else {
  //    this.setState({ contacts: contactsGot });
  //  }
  //}
  //const contacts = this.filterContacts();
  //const filter = this.state.filter;
  return (
    <>
      <h1>Phonebook</h1>
      {<ContactForm onSubmit={addContact} />}

      <h2>Contacts</h2>
      {/* <Filter filter={filter} onFilter={this.filterHandler} /> */}
      <ContactList
        contacts={filterContacts(contacts)}
        onDelete={deleteContact}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: () => dispatch(contactDelete()),
    addContact: () =>
      dispatch(contactAdd({ name: "Asdasd", number: "Adfasfasf" })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
