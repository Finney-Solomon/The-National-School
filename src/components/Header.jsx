import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Grid, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from "../Images/HomePageImages/Logo.png";

const navigationPages = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Management',
    link: '/management'
  },
  {
    name: 'Alumni',
    link: '/alumni'
  },
  {
    name: 'Gallery',
    link: '/gallery'
  },
  {
    name: 'Contact Us',
    link: '/contact'
  }
]
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div style={{ minWidth: '50vw' }}>
      <List>
        {navigationPages?.map((item) => (
          <ListItem button key={item?.name} component={Link} to={item?.link}>
            <ListItemText
              primary={
                <Typography variant="body1" sx={{ color: '#333', fontWeight: 'bold' }}>
                  {item?.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: { sm: 'none' }, }}
          >
            <MenuIcon color="inherit" />
          </IconButton >

          {/* Center the logo and navigation items */}
          <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ flexGrow: 1, padding: 2 }}>
            <Grid item>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: {
                    xs: '60px', // Small devices
                    sm: '70px', // Medium devices
                    lg: '80px', // Large devices
                  },
                  marginBottom: '4px',
                  maxWidth: '100%',
                }}
              />

            </Grid>
            <Grid item>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navigationPages?.map((item) => (
                  <Button
                    key={item?.name}
                    color="inherit"
                    component={Link}
                    to={item?.link}
                    sx={{ color: '#555', textTransform: 'none', fontWeight: 'bold', margin: '0 10px' }}
                  >
                    {item?.name}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', sm: 'none' }, minWidth: '50vw' }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
