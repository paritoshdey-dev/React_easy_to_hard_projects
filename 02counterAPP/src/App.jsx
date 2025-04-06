import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    if(count>0){
      setCount(count-1)
    }
  }
  function reset(){
    setCount(0)
  }
  return (
    <>
      <div className="bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-2xl rounded-2xl p-10 w-96 text-center space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-500">Simple Counter App</h1>
      
      <div className="text-6xl font-mono text-gray-800 bg-blue-100 rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-inner">
        {count}
      </div>
      
      <div className="space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Decrement
        </button>
      </div>

      <button
        onClick={reset}
        className="bg-gray-700 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
      >
        Reset
      </button>
    </div>
  </div>
    </>
  )
}

export default App
