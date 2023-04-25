import {
  AppBar,
  Button,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../Images/HomePageImages/Logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }} >
      <Toolbar>

      <Grid container spacing={2} alignItems="center">
  <Grid item xs= {4}>
  <img
          src={logo}
          alt="Logo"
          style={{ marginRight: "0px", height: "70px" }}
        />
  </Grid>
  <Grid item xs>
  <>
        <Button
         
          onClick={handleMenuOpen}
          color="secondary"
          variant="text"
        >
          About Us
        </Button>
        <>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>About Me</MenuItem>
            <MenuItem onClick={handleMenuClose}>School</MenuItem>
            <MenuItem onClick={handleMenuClose}>College</MenuItem>
          </Menu>
        </></>
  </Grid>
  <Grid item xs>
  <Button  color="secondary">
          Contact Us
        </Button>
  </Grid>
  <Grid item xs>
  <Button color="secondary">
          Contact Us
        </Button>
   </Grid>
</Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
