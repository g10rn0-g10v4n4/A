// eslint-disable-next-line
import { Task } from "@prisma/client";

type TaskProps = {
  task: Task
}

export default function Task({task}: TaskProps) {
  return (
    <><div className="card w-fit bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{task.name}</h2>
        <p>{task.desc}</p>
        <p>Priority: {task.priority}</p>
      </div>
    </div></>
  )
}
