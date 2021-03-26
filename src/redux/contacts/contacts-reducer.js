import { combineReducers } from "redux";
import types from "../contacts/contacts-types";
const initialState = [
  {
    id: "c7a273d-8bfr-66gr-wef2-4f4d57ea2d0",
    name: "Rosie Simpson",
    number: "459-12-56",
  },
  {
    id: "anctrjd-8bfr-66gr-wef2-4f4d57ea2d0",
    name: "Hermione Kline",
    number: "443-89-12",
  },
  {
    id: "dkt846a-8bfr-66gr-wef2-4f4d57ea2d0",
    name: "Eden Clements",
    number: "645-17-79",
  },
  {
    id: "hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0",
    name: "Annie Copeland",
    number: "227-91-26",
  },
];
const contactAddDelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CONTACT_ADD:
      return [...state, payload];
    case types.CONTACT_DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};
const contactFilterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case types.CONTACT_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: contactAddDelReducer,
  filter: contactFilterReducer,
});
