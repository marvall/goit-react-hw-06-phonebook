import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

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

const contactAddDelReducer = createReducer(initialState, {
  [actions.contactAdd.type]: (state, action) => [...state, action.payload],
  [actions.contactDelete.type]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const contactFilterReducer = createReducer("", {
  [actions.contactFiletr.type]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactAddDelReducer,
  filter: contactFilterReducer,
});
