import types from "../types/types";
export const contactDelete = (id) => {
  return {
    type: types.CONTACT_DELETE,
    payload: id,
  };
};

export const contactAdd = (contact) => {
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
