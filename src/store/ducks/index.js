import { combineReducers } from "redux";

import { reducerTodo as todos } from "./todo";

const rootReducers = combineReducers({
  todos
});
export default rootReducers;
