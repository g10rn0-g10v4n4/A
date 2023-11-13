import Task from "./Task";
import { type Task as task } from "@prisma/client";

type TaskListProps = {
  tasks: task[]
}

export default function TaskList({tasks}: TaskListProps) {
  return (
    <><div className="flex flex-row gap-2">
        {tasks?.map((task) => {
            return <Task key={task.id} task={task}/>
        })}
    </div></>
  )
}
