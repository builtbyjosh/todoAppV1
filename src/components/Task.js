import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <div className="item">
      <div className="middle aligned content">
        <h3>{task.text}</h3>
      </div>
      <div className="header">
        <i className="icon window close link red" onClick={() => onDelete(task.id)}></i>
      </div>
    </div>
  );
};

export default Task;
