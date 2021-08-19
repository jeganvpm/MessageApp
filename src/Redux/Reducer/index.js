import { combineReducers } from "redux";
import { ContactReducer, SelectedContactReducer, MessageReducer } from "./Reducer";

export const reducers = combineReducers({
    allContacts: ContactReducer,
    contact: SelectedContactReducer,
    allMessages:MessageReducer
})