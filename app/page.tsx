'use client'
import { useState } from 'react'

export default function Home() {

  const [title, setTitle] = useState("")
  console.log(title)

  return (
    <>
      <div className="justify-center items-center">
        <div>
          <h1 className="bg-yellow-400 text-center text-5xl p-4 font-bold">Add TODO</h1>
        </div>
        <div className="flex justify-center bg-red-500 p-5">
          <input
            className="rounded-lg mx-10 text-center"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <button className="bg-slate-500 rounded-full p-2">ADD</button>
        </div>
      </div>
    </>
  )
}
