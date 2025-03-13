const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'pending', enum: ['pending', 'in progress', 'completed'] },
  dueDate: { type: Date }
});

module.exports = mongoose.model('Task', taskSchema);