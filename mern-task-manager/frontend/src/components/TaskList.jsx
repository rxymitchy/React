import React, { useState, useEffect } from 'react';
import { fetchTasks, deleteTask } from '../services/api';
import TaskItem from './TaskItem';

const TaskList = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetchTasks(); // Call the API to fetch tasks
        setTasks(response.data); // Update the state with the fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error); // Handle errors
      }
    };
    getTasks();
  }, []);

  // Function to handle task deletion
  const handleDelete = async (id) => {
    try {
      await deleteTask(id); // Call the API to delete the task
      setTasks(tasks.filter(task => task._id !== id)); // Remove the deleted task from the state
    } catch (error) {
      console.error('Error deleting task:', error); // Handle errors
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {/* Display a message if no tasks are found */}
      {tasks.length === 0 ? (
        <p>No tasks found. Add a task to get started!</p>
      ) : (
        <ul>
          {/* Map through the tasks and render a TaskItem for each */}
          {tasks.map(task => (
            <TaskItem key={task._id} task={task} onDelete={handleDelete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;