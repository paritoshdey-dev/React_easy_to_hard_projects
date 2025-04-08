import { useState } from 'react'
import './App.css'
import Pagination from './components/Pagination';

function App() {
  //Dummy data
 const items=Array.from({length:50},(_,i)=>`Item ${i+1}`);

  return (
    <>
      <div className='"max-w-xl mx-auto mt-10"'>
      <h1 className='text-2xl font-bold mb-4'>Simple Pagination</h1>
      <Pagination data={items} itemsPerPage={5}/>
      </div>
    </>
  )
}

export default App
