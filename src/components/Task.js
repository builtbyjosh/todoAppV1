import React from 'react';

const Task = ({task}) => {
  return (
    <div>
      <h3>{task.text}</h3>
      <i className="icon window close link"></i>
    </div>
  );
}

export default Task;
