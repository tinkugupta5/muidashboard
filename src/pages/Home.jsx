import React from 'react'
import Sidenav from '../Sidenav'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <h1>Home</h1>
    </Box>
    </>
    
  );
}

export default Home