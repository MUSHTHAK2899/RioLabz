import React from 'react'
import { Routes, Route } from "react-router-dom"
import {Home,Nav} from '../pages'
import { ProductView } from '../components'

const Routers = () => {
  return (
 <>
 <Nav/>
   <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="View" element={ <ProductView/> } />
      </Routes>
 </>
  )
}

export default Routers