import React from 'react';
import Task from './Task';

const Tasks = () => {
  const taskList = [
    {id: 1, text: "take out trash"},
    {id: 2, text: "Clean floor"},
    {id: 3, text: "Code React"},
  ]

  return (
    <div className="ui segment">
      {taskList.map((task)=>(
        <div className="ui divider">
          <Task key={task.id} task={task} />
        </div>        
      ))}
    </div>
  );
}

export default Tasks;
