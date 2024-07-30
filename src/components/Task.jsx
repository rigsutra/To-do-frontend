/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ task, onUpdate, onDelete, onComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage task expansion

  // Toggle expand/collapse state
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`bg-slate-200 mt-5 p-7 rounded-lg w-full transition-all shadow-lg transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer ${
        isExpanded ? "h-auto" : "h-24 overflow-hidden"
      }`}
      onClick={toggleExpand} // Expand/collapse the card on click
    >
      <h3 className="text-xl mb-1 font-[500] text-center">
        {task.title} {task.completed ? "✅" : ""}
      </h3>
      <div
        className={`mt-3 ${
          isExpanded ? "flex flex-col items-center" : "hidden"
        }`}
      >
        <p className="my-3 text-center text-[16px] font-medium  w-full">
          {task.description}
        </p>
        <p className="text-sm text-gray-500 text-center w-full">
          Last updated: {new Date(task.updatedAt).toLocaleString()}
        </p>
        <div className="flex space-x-3 mt-2 justify-center">
          <button
            className="bg-slate-700 text-white py-2 px-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-md w-24"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              onUpdate(task.id); // Trigger update function
            }}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-md w-24"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              onDelete(task.id); // Trigger delete function
            }}
          >
            Delete
          </button>
          <button
            className="bg-slate-700 text-white py-2 px-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-md w-24"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              onComplete(task.id); // Trigger complete function
            }}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
