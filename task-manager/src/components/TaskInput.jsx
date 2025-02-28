import React, {useState} from 'react'

function TaskInput() {
    const [task, setTask] = useState(" ");

    function handleSubmit(e){
        e.preventDefault(); //prevents page from submitting by default

        //if not task received from user(trim is used to remove whitespaces)
        if(!task.trim()) return;
        addTask(task); //gets task from user
        setTask(""); //appends task here
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='task-input'>
        <input
        type="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a task..'
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default TaskInput

