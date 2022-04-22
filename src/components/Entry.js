import React from "react";
import ThoughtsForm from "./ThoughtsForm"
import TaskForm from "./TaskForm"
import "../css/style.css"


const Entry = () => {
  return (
    <div className="align">
      <ThoughtsForm />
      <TaskForm />
    </div>
  )
}

export default Entry