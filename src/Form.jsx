import "./App.css";
import { useState } from "react";
import { addTodo } from "./redux/todos";

export default function Form(props) {
  const [inputValue, setInputValue] = useState("");

  function checkEmptyString(inputValue) {
    if (/^\s*$/g.test(inputValue)) {
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  }

  return (
    <div className={`formDiv`}>
      <span style={{ display: "flex", textAlign: "center" }}>
        <h3 style={{ fontWeight: "500" }}>Add new task</h3>
        <span
          className="closeCross"
          onClick={() => {
            props.toggle();
          }}
        >
          X
        </span>
      </span>

      <div className="formPopUp">
        <form onSubmit={handleSubmit} action="submit">
          <input
            className="newInputField"
            type="text"
            placeholder="What do you need to do today?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" &&
                checkEmptyString(inputValue) &&
                e.preventDefault();
            }}
          />
          <button
            type="submit"
            className={`${
              checkEmptyString(inputValue) ? "disabledAddBtn" : "submitBtn"
            }`}
          >
            Add todo
          </button>
        </form>
      </div>
    </div>
  );
}
