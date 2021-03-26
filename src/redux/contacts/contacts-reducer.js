import { combineReducers } from "redux";
import types from "../contacts/contacts-types";

const contactAddDelReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.CONTACT_ADD:
      return [...state, payload];
    case types.CONTACT_DELETE:
      return { state: state.filter((contact) => contact.id !== payload) };

    default:
      return state;
  }
};
const contactFilterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case types.CONTACT_FILTER:
      return { state: payload };
    default:
      return state;
  }
};

export default combineReducers({
  items: contactAddDelReducer,
  filter: contactFilterReducer,
});
