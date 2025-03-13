import React, { useState } from 'react';
import { createTask, updateTask } from '../services/api';

const TaskForm = ({ taskToEdit, onTaskSubmit }) => {
  // State to manage the form inputs
  const [task, setTask] = useState({
    title: taskToEdit?.title || '', // Pre-fill if editing a task
    description: taskToEdit?.description || '',
    status: taskToEdit?.status || 'pending',
    dueDate: taskToEdit?.dueDate || '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value }); // Update the state with the new input value
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      if (taskToEdit) {
        // If editing, call the update API
        await updateTask(taskToEdit._id, task);
      } else {
        // If creating, call the create API
        await createTask(task);
      }
      onTaskSubmit(); // Notify the parent component to refresh the task list
    } catch (error) {
      console.error('Error submitting task:', error); // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title input */}
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {/* Description input */}
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      {/* Status dropdown */}
      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {/* Due date input */}
      <div>
        <label className="block text-sm font-medium">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;