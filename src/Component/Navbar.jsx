import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="static">
        
    <Toolbar>
      <Typography variant="h6">
        My App
      </Typography>
      <Button color="inherit">About Us</Button>
      <Button color="inherit">Contact Us</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar





