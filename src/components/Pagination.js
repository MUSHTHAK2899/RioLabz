import React, { useState } from 'react'

const Pagination = ({totalPost,postPage,setPage,page}) => {
let pages=[]
for(let i=1;i<=Math.ceil( totalPost/postPage);i++){
        pages.push(i)
}
const handlePrevious=()=>{
    if(page<=1){
        setPage(1)
    }
    else{
        setPage(page-1)
    }
}

const handleNext=()=>{
    if(page>=4){
        setPage(4)
    }
    else{
        setPage(page+1)
    }
}
  return (
    <div className='p-5 max-w-[400px] bg-gray-700 flex gap-5  rounded-lg flex justify-center'>
     <button onClick={handlePrevious} className='bg-gray-800 px-4 rounded-lg text-white hidden sm:block'>Previous</button>
        {
            pages.map((pageNO,index)=>{
                return(
                   <div className='text-center' key={index}>
                   <button key={index} onClick={()=>setPage(pageNO)} className={pageNO===page?'bg-slate-400 p-2 rounded-lg text-white':'p-2  rounded-lg text-white'}>{pageNO}</button>
                   </div>
                )
            })
        }
        <button onClick={handleNext} className='bg-gray-800 px-4 rounded-lg text-white'>Next</button>
    </div>
  )
}

export default Pagination