import React, { useState } from 'react'

const SearchComponent = ({product,setProduct}) => {
  const [search,searchItem]=useState()
  console.log(search)

  const handleSearch=(itemCat) => {
if(itemCat===''){
  setProduct(product)
}else{
  const data =  product.filter((item,index)=>{
    return  item.title.toLowerCase().includes(search.toLowerCase())
    //item.title[index]===itemCat[index]
})
setProduct(data)
console.log("hallobv",data)
}
  
  }
  return (
    <>
 <div className='p-5'>
 <div className='flex justify-center '> 
      <input onChange={(e)=>{searchItem(e.target.value);handleSearch(e.target.value)}} type="text" className='bg-gray-200 w-[500px] py-2 outline-none p-5 rounded-md'/>
      <button onClick={()=>handleSearch(search)} className='bg-gray-900 max-w-32 text-white font-bold py-2 outline-none p-5 rounded-md'>Search</button>
    </div>
 </div>

    </>
  )
}

export default SearchComponent