import React, { useEffect, useState } from 'react'
import api from '../Api/GeneralApi'

const Filter = ({product,setProduct}) => {

    const [catagory,setCatagory]=useState([])

    useEffect(()=>{
        catagoryList()
    },[])

    const catagoryList=()=>{
        api.getCatagoryList().then((result)=>{
           console.log("Products==>",result)
            setCatagory(result.data)
        })
        .catch((err) => {
            console.log("api error  response", err)
        });
    }

    const handleFilter=(itemCat)=>{
       const data =  product.filter((item,index)=>{
                return item.category===itemCat
            })
            setProduct(data)
            console.log("hallobv",data)
    }
  return (
    <div className='flex flex-col lg:flex-row lg:justify-evenly p-5 gap-5 lg:gap-0 '>
        <button onClick={()=>setProduct(product)} className='bg-gray-800 text-white hover:bg-gray-700  px-7 py-2 rounded-lg'>All</button>
        {
            catagory.map((item,index) =>{
                return (
                    <div className='' key={index}>
                        <button onClick={()=>handleFilter(item)} className='bg-gray-800 text-white hover:bg-gray-700 w-full md:px-7 py-2 rounded-lg'>{item}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Filter