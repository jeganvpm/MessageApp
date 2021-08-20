import { combineReducers } from "redux";
import { ContactReducer, SelectedContactReducer } from "./Reducer";

export const reducers = combineReducers({
    allContacts: ContactReducer,
    contact: SelectedContactReducer
})