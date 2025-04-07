import React from 'react'
import SearchBar from './SearchBar'

function App() {
  function handleSearch(query){
    console.log('search:',query)
    // simulate API call or filtering here
  }
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className="text-2xl font-bold mb-4 text-center">Debounced SearchBar</h1>
      <SearchBar onSearch={handleSearch}></SearchBar>
    </div>
  )
}

export default App
