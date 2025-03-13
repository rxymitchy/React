import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  // State to trigger a refresh of the task list
  const [refreshTasks, setRefreshTasks] = useState(false);

  // Function to toggle the refresh state
  const handleTaskSubmit = () => {
    setRefreshTasks(!refreshTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Task Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Task Form */}
        <div>
          <TaskForm onTaskSubmit={handleTaskSubmit} />
        </div>
        {/* Task List */}
        <div>
          <TaskList refreshTasks={refreshTasks} />
        </div>
      </div>
    </div>
  );
};

export default App;