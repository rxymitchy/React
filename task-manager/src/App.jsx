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

  useEffect(() => {
    localStorage.setItem("tasks", JSON/stringify(tasks));
  }, [tasks])

  function addTask(text){
    const newTask = {id: Date.now(), text, complete: false};
    setTasks([...tasks, newTask]) // ... is a spread operater and copies something to another
  }

  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
    <TaskInput/>
    </>
  )
}

export default App
