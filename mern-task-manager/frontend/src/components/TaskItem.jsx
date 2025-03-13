import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="border p-4 mb-2 rounded shadow">
      {/* Display task details */}
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      {/* Delete button */}
      <button
        onClick={() => onDelete(task._id)} // Call the onDelete function with the task ID
        className="bg-red-500 text-white p-1 rounded mt-2"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;