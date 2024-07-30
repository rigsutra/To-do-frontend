/* eslint-disable react/prop-types */
import { useState } from "react";
import TaskForm from "./components/TaskForm"; // Import the TaskForm component
import TaskList from "./components/TaskList"; // Import the TaskList component
import Events from "./components/Events"; // Import the Events component
import tasksData from "./data/task.json"; // Import initial task data
import eventsData from "./data/events.json"; // Import initial event data
import Header from "./components/Header"; // Import the Header component

const App = () => {
  // State to hold tasks and completed tasks
  const [tasks, setTasks] = useState(tasksData);
  const [completedTasks, setCompletedTasks] = useState([]);

  // State for search term and editing task
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to add a new task
  const handleAddTask = (newTask) => {
    const updatedTasks = [
      ...tasks,
      {
        id: tasks.length + 1,
        ...newTask,
        completed: false,
        updatedAt: new Date().toISOString(),
      },
    ];
    setTasks(updatedTasks);
  };

  // Function to set the task being edited
  const handleUpdateTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditingTask(taskToEdit);
  };

  // Function to update a task after editing
  const handleEditSubmit = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id
        ? { ...task, ...updatedTask, updatedAt: new Date().toISOString() }
        : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  // Function to delete a task
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to complete a task
  const handleCompleteTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    setCompletedTasks([...completedTasks, taskToComplete]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header component with search functionality */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Main content area */}
      <div className="flex flex-col md:flex-row justify-center items-start mx-10 mt-5">
        {/* Left side: Task form and completed tasks */}
        <div className="w-full md:w-1/3 mb-5 md:mb-0">
          {/* Task form for adding or editing tasks */}
          <TaskForm
            onSubmit={editingTask ? handleEditSubmit : handleAddTask}
            initialTask={editingTask}
          />

          {/* Completed tasks section */}
          <div className="flex flex-col m-5 border p-5 bg-slate-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-[550] mb-4 text-center text-slate-800">
              Completed Tasks
            </h2>
            {completedTasks.length === 0 ? (
              <p>No completed tasks</p>
            ) : (
              completedTasks.map((task) => (
                <div key={task.id} className="mb-2 flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                  <h3 className="text-lg font-medium">{task.title}</h3>
                </div>
              ))
            )}
          </div>

          {/* Events section */}
          <Events events={eventsData} />
        </div>

        {/* Right side: Task list */}
        <div className="w-full md:w-2/3 md:ml-5">
          <TaskList
            tasks={filteredTasks}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
            onComplete={handleCompleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
