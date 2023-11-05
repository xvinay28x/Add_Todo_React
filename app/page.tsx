'use client'
import { useState } from 'react'

export default function Home() {

  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  console.log(title)

  const [addtodo, setAddtodo] = useState(true)

  return (
    <>
      <div className="justify-center w-full h-screen">
        <div>
          <h1 className="bg-yellow-400 text-center text-5xl p-4 font-bold">Add TODO</h1>
        </div>
        <div className="flex justify-center bg-red-500 py-32">
          <form>
            <input
              className="rounded-lg text-center p-3 border-2 border-gray-400"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              className="rounded-lg text-center p-3 w-96 border-2 border-gray-400"
              type="text"
              value={note}
              placeholder="Note"
              onChange={(event) => setNote(event.target.value)}
            />
            <button className="bg-slate-500 rounded-full p-2">ADD</button>
          </form>
        </div>
      </div>
    </>
  )
}
