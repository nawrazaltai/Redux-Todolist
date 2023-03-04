import { createReduxModule } from "hooks-for-redux";

const initialState = {
  todosData: [],
};

export const [
  useTodos,
  { setTodos, addTodo, clearTodos, toggleTodo, deleteTodo },
] = createReduxModule("todos", initialState, {
  setTodos: (state, todos) => {
    return { ...state, todosData: todos };
  },
  addTodo: (state, title) => {
    return {
      ...state,
      todosData: [
        ...state.todosData,
        { id: Date.now(), task: title, complete: false },
      ],
    };
  },
  toggleTodo: (state, id) => {
    return {
      ...state,
      todosData: state.todosData.map((todo) => {
        if (id === todo.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      }),
    };
  },
  deleteTodo: (state, id) => {
    return {
      ...state,
      todosData: state.todosData.filter((todo) => {
        return todo.id !== id;
      }),
    };
  },
  clearTodos: (state) => {
    return { ...state, todosData: [] };
  },
});
