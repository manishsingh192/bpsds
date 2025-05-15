// StatsOverview.js
import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const StatsOverview = () => {
  return (
    <Card sx={{ p: 4, height: '100%', borderRadius: 3 }}>
      <Box textAlign="center">
        <Typography color="primary">Quotation</Typography>
        <Typography color="success.main">Booking</Typography>
        <Box mt={4} display="flex" justifyContent="space-around">
          <Typography color="primary">Bookings</Typography>
          <Typography color="primary">Cancelled</Typography>
          <Typography color="primary">Revenue</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default StatsOverview;
