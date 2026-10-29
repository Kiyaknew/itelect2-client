import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";


const STARTING_TASKS = [
  { id: 1, title: "Write project report", dueDate: "2026-11-05" },
  { id: 2, title: "Bring index card", dueDate: "2026-11-07" },
  { id: 3, title: "Submit GT13", dueDate: "2026-11-10" },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: "No due date",
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="task-manager">
      <h1>Task Manager</h1>
      <p className="count">{tasks.length} tasks</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;