import React from "react";
import Task from "./Task";

const Tasks = () => {
  const taskList = [
    { id: 1, text: "take out trash" },
    { id: 2, text: "Clean floor" },
    { id: 3, text: "Code React" },
  ];

  return (
    <div className="ui divided items">
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
