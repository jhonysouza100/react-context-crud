"use client"

import { useState } from "react";
import { useMyContext } from "../../context/index"
import { useRouter } from "next/navigation";

export default function New({params}) {

 

  const { createTask } = useMyContext();
  
  const [task, setTask] = useState()
  
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      id:  crypto.randomUUID()
    })
  }
  
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    createTask(task.title, task.description, task.id);
    router.push("/tasks");
  }

  return (
    <>
      <h1>New Task</h1>
      <form name="title" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="title" placeholder="Write a title" />
        <textarea onChange={handleChange} name="description" placeholder="write a description" />
        <button>Save</button>
      </form>
    </>
  );
}
