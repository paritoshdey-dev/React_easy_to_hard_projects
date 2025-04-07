import React from 'react'

function ModalComponent({isOpen,onClose,title,children}) {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative'>
        <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={onClose}
        >
        &times;
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default ModalComponent
