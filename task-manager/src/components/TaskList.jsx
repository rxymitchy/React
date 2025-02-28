import React from 'react'
import TaskItem from './TaskItem'

function TaskList({task, toggleComplete, deleteTask }) {
  return (
    <div className='task-list'>
        {task.length === 0 ?(
            <p className='empty-message'>No Task Added Yet</p>
        ): (
            // map enables iteration untill all tasks are found
            task.map((task) => {
                <TaskItem
                key={task.id}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                />
            })
        )}
      
    </div>
  )
}

export default TaskList
