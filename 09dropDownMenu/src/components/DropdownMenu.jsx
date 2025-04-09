import React,{useState} from 'react'

function DropdownMenu() {
    const [isOpen,setIsOpen]=useState(false)
    const [selected,setSelected]=useState("Select Option")
    const options=["Option 1","Option 2","Option 3","Option 4","Option 5"]
    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };
  return (
    <div className='relative inline-block text-left'>
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        {selected} <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
