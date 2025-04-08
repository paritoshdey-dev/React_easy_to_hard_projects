import React,{useState} from 'react'

function Pagination({data,itemsPerPage}) {
    const[currentPage,setCurrentPage]=useState(1);
    const totalPages=Math.ceil(data.length/itemsPerPage);
    
    const handleClick=(page)=>{
        setCurrentPage(page)
    }

    const handlePrev=()=>{
        if(currentPage>1) setCurrentPage((prev)=>prev-1);
    }

    const handleNext=()=>{
        if(currentPage<totalPages) setCurrentPage((prev)=>prev+1)
    }

    const startIndex=(currentPage-1)*itemsPerPage;
    const selectedData=data.slice(startIndex,startIndex+itemsPerPage);
    console.log("Selected Data:", selectedData);
    return (
    <div className='p-4'>
      <ul className="mb-4 space-y-2">
        {selectedData.map((item,index)=>{
            return(
            <li key={index} className="p-2 border rounded bg-gray-50">
            {item}
            </li>
            )
        })}
      </ul >
      <div className="flex items-center gap-2">
        <button onClick={handlePrev} disabled={currentPage==1} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
            Prev</button>
        
        {[...Array(totalPages)].map((_,i)=>(
            <button 
            key={i} 
            onClick={()=>handleClick(i+1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >{i+1}</button>
        ))}

        <button onClick={handleNext} disabled={currentPage==totalPages} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  )
}

export default Pagination
