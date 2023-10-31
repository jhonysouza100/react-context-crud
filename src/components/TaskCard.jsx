import { useRouter } from "next/navigation";
function TaskCard({tasks}) {
  const router = useRouter();
  return (
    <div>
      {tasks.map((el) => (
        <div key={el.id} className="bg-slate-800 text-white"
        onClick={() => router.push(`/edit/${el.id}`)}>
          <h2>{el.title}</h2>
          <button>Delete</button>
          <p>{el.description}</p>
        </div>

      ))}
    </div>
  );
}

export default TaskCard;
