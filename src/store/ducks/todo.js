// my todo
const initialState = {
  todos: [
    {
      id: Math.floor(Math.random() * 99999),
      name: "Fazer atividade fisica",
      toggle: true
    },
    {
      id: Math.floor(Math.random() * 99999),
      name: "Passear com meu cachorro",
      toggle: false
    }
  ]
};

export const typesTodo = {
  addTodo: "addTodo",
  removeTodo: "removeTodo",
  toggleTodo: "toggleTodo"
};

export const actionsTodo = {
  addTodo: name => ({
    type: typesTodo.addTodo,
    payload: name
  }),
  removeTodo: id => ({
    type: typesTodo.removeTodo,
    payload: id
  }),
  toggleTodo: id => ({
    type: typesTodo.toggleTodo,
    payload: id
  }),
};

export const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case typesTodo.addTodo:
      return {
        todos: state.todos.concat({
          id: Math.floor(Math.random() * 99999),
          name: action.payload,
          toggle: false
        })
      };
    case typesTodo.removeTodo:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case typesTodo.toggleTodo:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.toggle = !todo.toggle;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
