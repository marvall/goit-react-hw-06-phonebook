import { combineReducers, createStore } from "redux";
import contactReducer from "../contacts/contacts-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
