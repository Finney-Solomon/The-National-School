import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const Gallery = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="Gallery 1" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="Gallery 2" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="Gallery 3" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gallery;