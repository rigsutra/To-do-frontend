/* eslint-disable react/prop-types */
import { useState } from "react";
import Task from "./Task"; // Import the Task component

const TaskList = ({ tasks, onUpdate, onDelete, onComplete }) => {
  // State to track the currently expanded task ID
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  // Function to handle the expansion of a task
  const handleToggleExpand = (taskId) => {
    // Toggle the expanded task ID
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onComplete={onComplete}
          isExpanded={expandedTaskId === task.id} // Pass the expanded state
          onToggleExpand={() => handleToggleExpand(task.id)} // Pass the toggle function
        />
      ))}
    </div>
  );
};

export default TaskList;
