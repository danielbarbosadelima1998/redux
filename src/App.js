import React from "react";
import TodoList from "./views/Todo";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;
