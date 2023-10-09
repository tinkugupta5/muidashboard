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
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../Dash.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/AccordionDash'
import BarChart from '../charts/BarChart';

// import DrawerHeader from '@mui/material/DrawerHeader';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// 25 runiing

const Analytics = () => {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <Grid container spacing={2}>

        <Grid item xs={8}>

{/* left side  */}

<Stack spacing={2} direction="row">
<Card sx={{ minWidth: 49 + "%",height:150 }} className='gradient'>

  <CardContent>
    <div>
    <CreditCardIcon/>
    </div>
    <Typography gutterBottom variant="h5" component="div">
      $500.00
    </Typography>
    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
    Total Order
    </Typography>
   
  </CardContent>

</Card> 
<Card sx={{ minWidth: 49 + "%",height:150 }} className='gradient1'>

  <CardContent>
  <div>
    <ShoppingBagIcon/>
    </div>
    <Typography gutterBottom variant="h5" component="div">
    $500.00
    </Typography>
    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
    Total Earnings
    </Typography>
    
  </CardContent>

</Card> 
</Stack>

</Grid>
            {/* right small cards  */}
          <Grid item xs={4}>
          <Stack spacing={2}>
            {/* right card overlapped */}
            
          <Card sx={{ minWidth: 155 }} className='gradientlight'>          
          
          <Stack spacing={2} direction="row">
            <div className='iconstyle' >
            <StorefrontIcon/>
            </div>
            <div className='paddingall
              '>
            <span className='pricetitle'>$234k </span>
            <br/>
             <span className='pricesubtitle'>Total Income</span> 
            </div> 
            </Stack>                  
                         
               
           </Card> 
          
          </Stack>
          </Grid> 
            {/* cards left  */}
         
               
        </Grid>

        <Box height={30}/>
        <Grid container spacing={2}>
          <Grid item xs={8}>
          <Card sx={{ height:60 + 'vh' }}>          
            <CardContent>
            <BarChart/>
                      
              </CardContent>     
           </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ height:60 + 'vh' }}>          
            <CardContent>
            <AccordionDash/>       
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

export default Analytics