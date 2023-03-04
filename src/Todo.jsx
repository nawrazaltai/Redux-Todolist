import React, { useEffect, useState } from "react";
import "./App.css";
import {
  useTodos,
  setTodos,
  toggleTodo,
  deleteTodo,
  clearTodos,
} from "./redux/todos";
import Form from "./Form";
import { BsCheckCircleFill, BsXCircleFill, BsTrashFill } from "react-icons/bs";

export default function Todo() {
  const { todosData } = useTodos();
  const [visible, setVisible] = useState(false);

  function togglePopUp() {
    setVisible(!visible);
  }

  return (
    <div className="todoContainer">
      <div className="activeTasksH4">
        <h4>Your current tasks</h4>
      </div>
      <div className="activeTasksDiv">
        {todosData.map((todo) => {
          return (
            <div className="todoDiv" key={todo.id}>
              <span style={{ color: "black" }}>&#8226;</span>
              <h1
                contentEditable={true}
                className="title"
                style={{
                  textDecoration: todo.complete ? "line-through" : "none",
                }}
              >
                {todo.task}
              </h1>

              <div className="todoBtns">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    toggleTodo(todo.id);
                  }}
                >
                  {todo.complete ? (
                    <BsXCircleFill fill="red" title="Undo" />
                  ) : (
                    <BsCheckCircleFill fill="green" title="Mark as complete" />
                  )}
                </div>
                <div>
                  <BsTrashFill
                    style={{ cursor: "pointer" }}
                    title="Delete task"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                    fill="#524E77"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="addTodoBtnDiv">
        <span
          onClick={() => {
            clearTodos();
          }}
          className="clearTodosSpan"
        >
          Clear all tasks
        </span>
        <button
          className="addTodoBtn"
          onClick={() => {
            togglePopUp();
          }}
        >
          +
        </button>
      </div>
      {visible ? <Form toggle={togglePopUp} /> : ""}
    </div>
  );
}
