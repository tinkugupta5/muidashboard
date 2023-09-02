import React from 'react'
import Sidenav from '../components/Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar'

// import DrawerHeader from '@mui/material/DrawerHeader';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Home</h1>
        
      </Box>
    </Box>
    A 
    </>
    
  );
}

export default Home