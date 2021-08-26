import { createStore } from "redux";
import { reducers } from "./Reducer";
const store = createStore(reducers);
console.log('store',store);
export default store