
import React,{ useState } from 'react'

function TaskList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return (
    <div>
      <form>
        <input type='text' value={inputValue} onChange={handleChange} className='bg-gray-100 p-4 m-2 text-black'/>
        <button onClick={handleSubmit} className='p-3 bg-gray-600 rounded-xl cursor-pointer hover:bg-gray-400'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li className='text-white ' key={index}>{todo}
          <button onClick={() =>handleDelete(index)} className='p-2 bg-red-600 rounded-xl m-4 cursor-pointer hover:bg-red-400'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList;