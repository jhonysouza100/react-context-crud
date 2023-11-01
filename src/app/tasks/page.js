"use client"
import TaskCard from "@/components/TaskCard";
import { useMyContext } from "@/context";

function Tasks() {

  const { tasks } = useMyContext() // or useAppContext

   
  return (
    <div>
      <h1>Tasks Page</h1>
      <TaskCard tasks={tasks} />
    </div>
  );
}

export default Tasks;