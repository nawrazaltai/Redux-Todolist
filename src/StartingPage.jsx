import { HiPlus } from "react-icons/hi";
import { useState } from "react";
import "./App.css";
import Form from "./Form";

export default function StartingPage() {
  const [visible, setVisible] = useState(false);

  function togglePopUp() {
    setVisible(!visible);
  }

  return (
    <div className="emptyTasksDiv">
      <img
        className="tasksImage"
        src="/src/assets/tasks.svg"
        alt="SVG as an image"
      ></img>
      <p className="getStartedText">
        You have no active tasks, <br />
        add a task to get started!
      </p>
      <div className="startingPageBtnDiv">
        <button
          onClick={() => {
            togglePopUp();
          }}
          className="startingPageBtn"
        >
          <span> Add your first task</span>
          <HiPlus className="plusIcon" />
        </button>
      </div>

      {visible ? <Form toggle={togglePopUp} /> : ""}
    </div>
  );
}
