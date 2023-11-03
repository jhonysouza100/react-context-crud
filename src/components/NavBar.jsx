"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavBar() {

  const router = useRouter();

  return (
    <header>
      <h1>Task App</h1>
      <nav>
        <ul>
          <Link href="/tasks">Tasks</Link>
          <button onClick={() => router.push("/new")}>Add Task</button>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;