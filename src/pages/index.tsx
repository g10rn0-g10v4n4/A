import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { api } from "~/utils/api";
import TaskList from "~/components/TaskList";
import Head from "next/head";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const response = await fetch("/api/")
      const data = await response.json()
      setTasks(data.message)
    }
    getTasks();
  })
  const user = useUser();
  const { data } = api.post.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <h1 className="font-bold p-10 text-2xl">Task Manager</h1>
        {/* Replace with navbar with SignIn component and UserButton^ */}
        <TaskList tasks={tasks}/>
        <div>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
          </div>
          <div>
            {data?.map((post) => (
              <div key = {post.id}>{post.desc}</div>
            ))}
          </div>
      </main>
    </>
  );
}
