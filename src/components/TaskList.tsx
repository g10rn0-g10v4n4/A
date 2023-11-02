import Task from "./Task";

type TaskListProps = {
    tasks: string[]
}

export default function TaskList({tasks}: TaskListProps) {
  let i = 0;
  return (
    <>
        {tasks.map((task) => {
            <Task key={i++}/>
            return <h1>{task}</h1>
        })}
    </>
  )
}
