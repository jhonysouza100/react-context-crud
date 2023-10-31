"use client"
import { createContext, useContext, useState } from "react"

const appContext = createContext()

export function ContextWrapper({children}) { // ||  AppWrapper({children}) {}
  let [state, setState] = useState("Hello World")
  let tasks = [{
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
]

  return (
  <appContext.Provider value={{
    state, setState,
    tasks
  }}>
    {children}
  </appContext.Provider>
  )
}

export function useMyContext() { // || useAppContext() {}
  return useContext(appContext)
}