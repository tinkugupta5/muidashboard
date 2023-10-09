import { Box } from '@mui/material'
import React from 'react'
import Sidenav from '../components/Sidenav'
import ProductList from './products/ProductList'
import Navbar from '../components/Navbar'

const Products = () => {
  return (
    <>
    <div className='bgcolor'>
      <Navbar/>
      <Box height={70}/>
        <Box sx={{display:"flex"}}>

          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:3}}>
            <ProductList/>
          </Box>

          </Box>
      
    </div>
    
    
    </>
  )
}

export default Products