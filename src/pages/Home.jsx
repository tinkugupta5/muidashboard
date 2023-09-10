import React from 'react'
import Sidenav from '../components/Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

// import DrawerHeader from '@mui/material/DrawerHeader';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// 21 runiing

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>


        <Grid container spacing={2}>
          <Grid item xs={8}>

          <Stack spacing={2} direction="row">
            <Card sx={{ maxWidth: 49 + "%",height:140 }}>
          
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
          
            </Card> 
            <Card sx={{ maxWidth: 49 + "%",height:140 }}>
          
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
          
            </Card> 
          </Stack>

          </Grid>
          <Grid item xs={4}>
          <Stack spacing={2}>
          <Card sx={{ maxWidth: 345 }}>          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>            
            </CardContent>     
           </Card> 
          <Card sx={{ maxWidth: 345 }}>          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>            
            </CardContent>     
           </Card> 
          </Stack>
          </Grid>      
        </Grid>

        <Box height={30}/>
        <Grid container spacing={2}>
          <Grid item xs={8}>
          <Card sx={{ height:60 + 'vh' }}>          
            <CardContent>
                          
              </CardContent>     
           </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ height:60 + 'vh' }}>          
            <CardContent>
                          
            </CardContent>     
           </Card>
          </Grid>
        
        </Grid> 
      </Box>
    </Box>
    A 
    </>
    
  );
}

export default Home