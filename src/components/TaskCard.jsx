import { useMyContext } from "@/context/index";
import { useRouter } from "next/navigation";
function TaskCard({ tasks }) {
  const router = useRouter();

  const { deleteTask } = useMyContext();
  const handleDelete = (id, e) => {
    e.stopPropagation();
    const confirm = window.confirm("Are you sure you want to delete");
    if(confirm) deleteTask(id);
  }
  return (
    <div className="flex gap-2 m-4 px-2 py-1">
      {tasks.map((el) => (
        <div  key={el.id}>
          <div className="bg-slate-800 text-white hover:cursor-pointer"
            onClick={() => router.push(`/edit/${el.id}`)}
          >
            <h2>{el.title}</h2>
            <p>{el.description}</p>
          </div>
          <button onClick={(e) => handleDelete(el.id, e)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskCard;
