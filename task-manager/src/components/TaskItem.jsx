import React  from 'react'

// use props to pass dynamic data
function TaskItem({task, toggleComplete, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "Complete" : ""}`}>
      <input type="checkbox" 
      checked={TaskItem.completed}
      onChange={()=>toggleComplete(task.id)} // target specific id of the task itself
      />

      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem
