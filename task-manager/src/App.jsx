import React, {useEffect, useState} from 'react'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import './styles/app.css'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    //makes this a local storage after getting tasks
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    
    //updates setTasks to hold the available tasks
    if(savedTasks) setTasks(savedTasks);
  }, []); // mounted once

  //triggered when new tasks are added and saves them in local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  function addTask(text){
    //creates a new task object with a date, text you want
    const newTask = {id: Date.now(), text, complete: false};
    setTasks([...tasks, newTask]) // ... is a spread operater and copies something to another
  }

  //filters task given by the specific id
  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // find task by id and toggles it with complete property 
  function toggleComplete(id){
    //uses map as an iterator to keep creating a new updated list
    setTasks(tasks.map((task)=>
      task.id === id ? {...task, completed: !task.complete } : task
    ))
  }
  return (
    <div className='container'>
    <h1>Task Manager PLP</h1>
    <TaskInput addTask={addTask} />
    <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />


    </div>
  )
}

export default App
