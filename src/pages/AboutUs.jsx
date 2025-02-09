import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Learn more about our school's history, mission, and values.
      </Typography>
    </Box>
  );
};

export default AboutUs;