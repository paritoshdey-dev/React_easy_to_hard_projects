import { useState } from 'react'
import './App.css'
import ModalComponent from './ModalComponent'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
      <h1 className="text-2xl font-bold mb-6">Modal Demo</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <ModalComponent isOpen={isOpen} onClose={()=>setIsOpen(false)} title="Welcome!">
        <p>This is a reusable modal component</p>
        <div className='mt-4 flex justify-end'>
          <button
           className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
           onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </ModalComponent>
      </div>
    </>
  )
}

export default App
