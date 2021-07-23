import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [task, setTasks] = useState([]);

  
  const taskList = [
    { id: 1, text: "take out trash" },
    { id: 2, text: "Clean floor" },
    { id: 3, text: "Code React" },
  ];

  // delete task
  const deleteTask = (id) => {
    taskList.filter((task) => task.id !== id);
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks taskList={taskList} onDelete={deleteTask} />
    </div>
  );
}

export default App;
