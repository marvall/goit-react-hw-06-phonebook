import types from "../types/types";
export const contactDelete = (contactID) => {
  return {
    type: types.CONTACT_DELETE,
    payload: contactID,
  };
};

export const contactAdd = (contact) => {
  console.log(contact);
  return {
    type: types.CONTACT_ADD,
    payload: contact,
  };
};

export const contactFiletr = (contactFilter) => {
  return {
    type: types.CONTACT_FITER,
    payload: contactFilter,
  };
};
