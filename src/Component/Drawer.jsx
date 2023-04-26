import {
  AppBar,
  Button,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../Images/HomePageImages/Logo.png";
import DrawerComponent from "./Drawer";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <img
              src={logo}
              alt="Logo"
              style={{ marginRight: "0px", height: "70px" }}
            />
          </Grid>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <>
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
                  </>
                </>
              </Grid>
              <Grid item xs>
                <Button color="secondary">Contact Us</Button>
              </Grid>
              <Grid item xs>
                <Button color="secondary">Contact Us</Button>
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

//https://github1s.com/dharmelolar/material-UI-navbar/blob/HEAD/src/component/Navbar.js#L62





// About Us
// School Vision, Mission and Philosophy
// Principal's Message
// Accreditation and Memberships

// Academics
// Curriculum and Programs
// Faculty and Staff
// Academic Calendar
// Student Support Services

// Admissions
// Admissions Process
// Tuition and Fees
// Scholarships and Financial Aid
// FAQ

// Campus Life
// School Branches and Locations
// Facilities and Amenities
// Athletics and Sports Programs
// News and Events

// Alumni
// Alumni News and Events
// Alumni Association
// Success Stories

// Contact Us
// School Address and Phone
// Email and Online Inquiry Form
// Directions and Maps
// Staff Directory