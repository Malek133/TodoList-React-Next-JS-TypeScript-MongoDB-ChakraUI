'use client'
import { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'

const page = () => {
  
  const [task, setTask] = useState("");
  const handleCreateTask = async() =>{

  }

  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} 
      handleCreateTask={handleCreateTask} />
    </>
  )
}

export default page
