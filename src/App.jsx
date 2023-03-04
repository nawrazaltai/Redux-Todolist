import { useState, useReducer, useEffect } from "react";
import Todo from "./Todo";
import "./App.css";
import { useTodos } from "./redux/todos";
import StartingPage from "./StartingPage";
import Header from "./Header";

function App() {
  const { todosData } = useTodos();

  return (
    <div className="App">
      <Header />
      {todosData.length > 0 ? <Todo /> : <StartingPage />}
    </div>
  );
}

export default App;
