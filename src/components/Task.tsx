import { Task } from "@prisma/client";

type TaskProps = {
  task: Task
}

export default function Task({task}: TaskProps) {
  return (
    // Use daisyUI card to create task layout
    <div>{task.name}</div>
  )
}
