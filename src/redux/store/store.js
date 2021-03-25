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
      return {
        contacts: {
          ...state.contacts,
          items: [
            ...state.contacts.items,
            {
              id: newID,
              name: payload.name,
              number: payload.number,
            },
          ],
        },
      };
    case types.CONTACT_DELETE:
      return {
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== payload
          ),
        },
      };

    case types.CONTACT_FILTER:
      return {
        contacts: {
          filter: payload.contactFilter,
          ...state.contacts.items,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
