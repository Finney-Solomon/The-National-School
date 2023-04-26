import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../Images/HomePageImages/Logo.png";
import HomeIcon from '@mui/icons-material/Home';
import { Grid } from "@mui/material";
export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      color="black"
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      color="black"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge  color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge  color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"

          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>

          <Grid container >
          <Grid item xs={4}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "70px" }}
          /></Grid>
 <Grid item xs={8}>
 <Grid container spacing={3} sx={{ display: { xs: "none", md: "flex" }}}  alignItems="center">
 <Grid item xs={2}></Grid>

          <Grid item xs="auto">  <IconButton
              size="small"
              color="black"
            >
                <HomeIcon />
              <p>Home</p>
            </IconButton></Grid>
          <Grid item xs="auto"> <IconButton
              size="small"
              color="black"
            >
                <NotificationsIcon />
              <p>About us</p>
            </IconButton></Grid>    <Grid item xs="auto">
            <IconButton
              size="small"
          
              color="black"
            >  
                <NotificationsIcon />
              <p>Management</p>
            </IconButton></Grid>    <Grid item xs="auto">   
            <IconButton
              size="small"
              color="black"
            > 
                <NotificationsIcon />
              <p>School Alumni</p>
            </IconButton>  </Grid>    
           <Grid item xs="auto">  
            <IconButton
              size="small"
              color="black"
            > 
                <NotificationsIcon />
              <p>Gallery</p>
            </IconButton></Grid>

            <Grid item xs="auto">  
            <IconButton
              size="small"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="black"
            >
              <AccountCircle />
              <p>Contact us</p>
            </IconButton> </Grid>
          
          </Grid>
          </Grid>
          </Grid>



          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
           
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
