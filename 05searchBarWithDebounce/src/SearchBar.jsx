import React, { useEffect, useState } from 'react'

function SearchBar({onSearch}) {
    const[query,setQuery]=useState('');
    const[debouncedQuery,setDebouncedQuery]=useState(query);

    //Debounce Effect
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncedQuery(query)
        },500); 
        return ()=>clearTimeout(timer);
    },[query])

    useEffect(()=>{
        if(debouncedQuery!==''){
            onSearch(debouncedQuery)
        }
    },[debouncedQuery,onSearch])
  return (
    <div className="w-full max-w-md mx-auto mt-8">
        <input
        type='text'
        placeholder='search...'
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchBar
