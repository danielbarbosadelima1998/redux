import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { actionsTodo } from "../../store/ducks/todo";

function TodoList() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const todos = useSelector(state => state.todos.todos);

  // shows
  const [disp, setDisp] = useState("none");
  const [disp1, setDisp1] = useState("none");
  const [disp2, setDisp2] = useState("none");
  return (
    <div>
      <input type="text" onChange={e => setName(e.target.value)} />
      <input
        type="button"
        onClick={() => dispatch(actionsTodo.addTodo(name))}
        value="Add"
      />

      <button
        onClick={() => (disp === "none" ? setDisp("block") : setDisp("none"))}
      >
        Show all
      </button>

      <button
        onClick={() =>
          disp1 === "none" ? setDisp1("block") : setDisp1("none")
        }
      >
        Show underline
      </button>

      <button
        onClick={() =>
          disp2 === "none" ? setDisp2("block") : setDisp2("none")
        }
      >
        Show without underline
      </button>

      <div
        id="all"
        style={{
          display: disp
        }}
      >
        All:
        {todos.map(item => (
          <li
            key={item.id}
            style={{
              textDecoration: item.toggle ? "line-through" : "none"
            }}
            onClick={() => dispatch(actionsTodo.toggleTodo(item.id))}
          >
            {item.name}

            <button onClick={() => dispatch(actionsTodo.removeTodo(item.id))}>
              remover
            </button>
          </li>
        ))}
      </div>
      <div
        id="WithUnder"
        style={{
          display: disp1
        }}
      >
        underline:
        {todos
          .filter(todos => todos.toggle)
          .map(item => (
            <li
              key={item.id}
              style={{
                textDecoration: item.toggle ? "line-through" : "none"
              }}
              onClick={() => dispatch(actionsTodo.toggleTodo(item.id))}
            >
              {item.name}

              <button onClick={() => dispatch(actionsTodo.removeTodo(item.id))}>
                remover
              </button>
            </li>
          ))}
      </div>

      <div
        id="withOutUnder"
        style={{
          display: disp2
        }}
      >
        without underline:
        {todos
          .filter(todos => todos.toggle === false)
          .map(item => (
            <li
              key={item.id}
              style={{
                textDecoration: item.toggle ? "line-through" : "none"
              }}
              onClick={() => dispatch(actionsTodo.toggleTodo(item.id))}
            >
              {item.name}

              <button onClick={() => dispatch(actionsTodo.removeTodo(item.id))}>
                remover
              </button>
            </li>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
