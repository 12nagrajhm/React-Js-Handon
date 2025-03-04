import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]); // Add new task to the list
      setTask(""); // Clear the input field
    }
  };

  // Function to delete a task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove selected task
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "8px" }}>
        Add Task
      </button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
