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
import HomeIcon from "@mui/icons-material/Home";
import { Grid, Typography } from "@mui/material";

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
          <Badge color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <Typography variant="body2">Messages</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography variant="body2">Notifications</Typography>
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
        <Typography variant="body2">Profile</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Grid container direction="column" alignItems="center">
            {/* Logo */}
            <Grid item>
              <img src={logo} alt="Logo" style={{ height: "70px" }} />
            </Grid>

            {/* Navigation Buttons */}
            <Grid
              item
              container
              justifyContent="center"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item>
                <IconButton size="small" color="inherit">
                  <HomeIcon />
                  <Typography variant="body2" sx={{ color: "black", ml: 1 }}>
                    Home
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small" color="inherit">
                  <NotificationsIcon />
                  <Typography variant="body2" sx={{ color: "black", ml: 1 }}>
                    About Us
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small" color="inherit">
                  <NotificationsIcon />
                  <Typography variant="body2" sx={{ color: "black", ml: 1 }}>
                    Management
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small" color="inherit">
                  <NotificationsIcon />
                  <Typography variant="body2" sx={{ color: "black", ml: 1 }}>
                    School Alumni
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small" color="inherit">
                  <NotificationsIcon />
                  <Typography variant="body2" sx={{ color: "black", ml: 1 }}>
                    Gallery
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  size="small"
                  edge="end"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                  <Typography variant="body2" sx={{ color: "black", ml: 1 }}>
                    Contact Us
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
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
