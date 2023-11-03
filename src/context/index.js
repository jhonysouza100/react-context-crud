"use client"
import { createContext, useContext, useState } from "react"

const appContext = createContext()

export function ContextWrapper({children}) { // ||  AppWrapper({children}) {}

  // let [state, setState] = useState("Hello World")

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "tarea 1",
      description: "descripcion 1",
    },
    {
      id: 2,
      title: "tarea 2",
      description: "descripcion 2",
    },
    {
      id: 3,
      title: "tarea 3",
      description: "descripcion 3",
    }
  ]);

  const createTask = (title, description, id) => {
    setTasks([...tasks, {
      title,
      description,
      id
    }])
  }

  const deleteTask = (id) => {
    setTasks([...tasks.filter(t => t.id !== id)]);
  }

  return (
  <appContext.Provider value={{
    // state, setState,
    tasks, createTask, deleteTask
  }}>
    {children}
  </appContext.Provider>
  )
}

export function useMyContext() { // || useAppContext() {}
  return useContext(appContext)
}