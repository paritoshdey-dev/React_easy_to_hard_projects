import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <TaskList/>
          </div>
        </div>
      
    </>
  )
}

export default App
