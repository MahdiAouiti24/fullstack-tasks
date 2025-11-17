import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    completed: false,
  });

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;

    if (form.id === null) {
      response = await createTask(form);
      setTasks((prev) => [...prev, response.data]);
    } else {
      response = await updateTask(form.id, form);
      setTasks((prev) =>
        prev.map((t) => (t.id === form.id ? response.data : t))
      );
    }

    setForm({ id: null, title: "", description: "", completed: false });
  };

  const handleEdit = (task) => {
    setForm(task);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleCompleted = async (task) => {
    const updated = { ...task, completed: !task.completed };
    const res = await updateTask(task.id, updated);

    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? res.data : t))
    );
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Task Manager</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            name="completed"
            checked={form.completed}
            onChange={handleChange}
          />
          Completed
        </label>

        <button type="submit" style={{ marginLeft: "10px" }}>
          {form.id === null ? "Create" : "Update"}
        </button>

        {form.id !== null && (
          <button
            type="button"
            onClick={() => setForm({ id: null, title: "", description: "", completed: false })}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task)}
            />
            <strong style={{ marginLeft: "10px" }}>
              {task.title}
            </strong>{" "}
            - {task.description}

            <button
              onClick={() => handleEdit(task)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(task.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;