import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, toggleComplete, deleteTask }) {
  return (
    <div className='task-list'>
        {tasks.length === 0 ?(
            <p className='empty-message'>No Task Added Yet</p>
        ): (
            // map enables iteration untill all tasks are found
            tasks.map((tasks) => {
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
