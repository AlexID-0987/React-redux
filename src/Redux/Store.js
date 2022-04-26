import {combineReducers, createStore} from "redux";
import bodyReduser from "./Body-reduser";
const redusers=combineReducers({
    itemmess:bodyReduser
})
const store =createStore(redusers)
export default store
