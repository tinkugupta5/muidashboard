// import { Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Typography,Box,Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {db} from '../../firebase.config'
import { addDoc } from 'firebase/firestore';

const AddProduct = ({closeEvent}) => {
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [category,setCategory] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }
  const createUser = async() => {
    await addDoc(empCollectionRef,{
      name:name,
      price:Number(price),
      category:category,
      data:String(new Date())
    });
      getUsers();
      closeEvent();
      Swal.fire("Sumitted",'Your files has been submitted',"success");
    }
    
    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    // 15:00

  const currencies = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Electronics',
      label: 'Electronics',
    },
    {
      value: 'Food',
      label: 'Food',
    },
  ];
  
  return (
    <>
    <Box sx={{m:2}}/>
    <Typography variant='h5' align='center'>
      Add Product
    </Typography>
    <IconButton style={{position:"absolute",top:'0', right:'0'}} onClick={closeEvent}>
      <CloseIcon/>
    </IconButton>
    <Box height={20}/>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <TextField id="outlined-basic" label="Name" onChange={handleNameChange} value={name} variant="outlined" size='small' sx={{minWidth:"100%"}} />
      </Grid>
      <Grid item xs={6}>
      <TextField id="outlined-basic" label="Price" type='number'  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }} onChange={handlePriceChange} value={price} variant="outlined" size='small' sx={{minWidth:"100%"}} />
     
      </Grid>
      <Grid item xs={6}> 
      <TextField id="outlined-basic" label="Category" select onChange={handleCategoryChange} value={category}  variant="outlined" size='small' sx={{minWidth:"100%"}} > 
      {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
     
      </Grid>
      <Grid item xs={6}>
      <Button variant="contained" onClick={createUser}>
        Submit
      </Button>
     
      </Grid>
    </Grid>
    </>
  )
}

export default AddProduct