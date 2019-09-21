import { combineReducers } from "redux";

import title from "./title";
import todos from "./todos"

export default combineReducers({
    title,
    todos,
});