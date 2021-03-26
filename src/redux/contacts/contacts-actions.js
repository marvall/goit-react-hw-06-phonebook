import types from "./contacts-types";
import uuid from "react-uuid";

export const contactDelete = (id) => {
  return {
    type: types.CONTACT_DELETE,
    payload: id,
  };
};

export const contactAdd = (contact) => {
  return {
    type: types.CONTACT_ADD,
    payload: {
      id: uuid(),
      name: contact.name,
      number: contact.number,
    },
  };
};

export const contactFiletr = (contactFilter) => {
  return {
    type: types.CONTACT_FILTER,
    payload: contactFilter,
  };
};
