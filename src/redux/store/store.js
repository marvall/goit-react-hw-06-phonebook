import { createStore } from "redux";
import types from "../types/types";
import uuid from "react-uuid";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CONTACT_ADD:
      const newID = uuid();
      console.log({
        contact: {
          items: [
            {
              id: newID,
              name: payload.name,
              number: payload.number,
            },
          ],
          ...state.contacts,
        },
      });
      return {
        contact: {
          items: [
            {
              id: newID,
              name: payload.name,
              number: payload.number,
            },
          ],
        },
        ...state.contacts,
      };
    case types.CONTACT_DELETE:
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== payload.contactID
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
