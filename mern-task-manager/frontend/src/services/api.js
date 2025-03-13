import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

// Fetch all tasks
export const fetchTasks = () => axios.get(API_URL);

// Create a new task
export const createTask = (task) => axios.post(API_URL, task);

// Update an existing task
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);

// Delete a task
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);