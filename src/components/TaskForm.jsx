/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskForm = ({ onSubmit, initialTask }) => {
  // State for task title and description
  const [title, setTitle] = useState(initialTask ? initialTask.title : "");
  const [description, setDescription] = useState(
    initialTask ? initialTask.description : ""
  );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSubmit({ title, description }); // Call the submit function with task data
    setTitle(""); // Reset title input
    setDescription(""); // Reset description input
  };

  return (
    <div className="items-center">
      <form
        className="flex flex-col m-5 items-center border p-5 bg-slate-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-[550] mb-4 text-center text-slate-800">
          {initialTask ? "Update Task" : "Add New Task"}
        </h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title on input change
          placeholder={initialTask ? "Update Task Title" : "Task Title"}
          required // Make this field required
          className="mb-5 p-2 rounded-lg border border-gray-300 w-4/5"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description on input change
          placeholder={
            initialTask ? "Update Task Description" : "Task Description"
          }
          required // Make this field required
          className="w-4/5 mb-5 p-2 rounded-lg border border-gray-300"
        />
        <button
          className="rounded-md bg-slate-600 text-white p-2 transition-transform transform hover:scale-105 hover:shadow-md"
          type="submit"
        >
          {initialTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
