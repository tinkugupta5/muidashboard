import React from 'react'
import Sidenav from '../Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
// import DrawerHeader from '@mui/material/DrawerHeader';

const Settings = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings</h1>
        </Box>
      </Box>
      A
    </>

  );
}

export default Settings