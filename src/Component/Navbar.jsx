import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../Images/HomePageImages/Logo.png";
import SchoolName from "../Images/HomePageImages/SchoolName.png";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src={logo}
          alt="Logo"
          style={{ marginRight: "10px", height: "50px" }}
        />

        <img
          src={SchoolName}
          alt="School Name"
          style={{ height: "40px", width: "320px" }}
        />

        <Button
          color="inherit"
          onClick={handleMenuOpen}
          style={{ marginLeft: "auto" }}
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
        </>
        <Button color="inherit" style={{ marginLeft: "auto" }}>
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
