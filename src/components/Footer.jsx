import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import logo from "../Images/HomePageImages/Logo.png";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

  return (
    <Box sx={{ bgcolor: '#f1f2f3f1', color: '09122C', mt: 'auto', textAlign: 'center' }}>
      <Divider />
      <Grid container direction="row" alignItems="center" justifyContent="center" spacing={12} sx={{ p: 4 }}>
        <Grid item sx={{ display: { xs: '12', sm: '4', lg: '4' }, textAlign: 'start' }}>
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
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            The National School,
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            Pal Nagar, Ayyannapeta Ramavaram Rd,
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            Vizianagaram, Andhra Pradesh 535003
          </Typography>
        </Grid>
        <Grid item sx={{ display: { xs: '12', sm: '4', lg: '4' }, textAlign: 'start', marginRight: 'auto', marginBottom: 'auto' }}>
          <Typography variant="h4" sx={{ fontSize: { xs: '2rem', sm: '2rem' }, p: 0.5 }} color='primary'>
            Quick Links
          </Typography>
          <Divider />
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            Addmissions
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            About Us
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            Alumini
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            Gallery
          </Typography>
        </Grid>

        <Grid item sx={{ display: { xs: '12', sm: '4', lg: '4' }, textAlign: 'start', marginRight: 'auto', marginBottom: 'auto' }}>
          <Typography variant="h4" sx={{ fontSize: { xs: '2rem', sm: '2rem' }, p: 0.5 }} color="primary">
            Contact Us
          </Typography>
          <Divider />
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ fontSize: '1.2rem', marginRight: 1, color: 'primary.main' }} />
            <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
              +91 9000 000 000
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ fontSize: '1.2rem', marginRight: 1, color: 'primary.main' }} />
            <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
              nationalschool@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{ display: { xs: '12', sm: '4', lg: '4' }, textAlign: 'start', marginTop: 'auto' }}>
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
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            The National School East,
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            ASR NAGAR 5, Pedathadivada,
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, p: 0.5 }}>
            Vizianagaram, Andhra Pradesh 535003
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 'auto', textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          © 2025 The National School. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;