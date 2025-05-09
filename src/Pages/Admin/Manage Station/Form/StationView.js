import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from '@mui/material';

const StationView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const station = location.state;

  if (!station) {
    return (
      <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>
        No station data available
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Back
      </Button>

      <Card sx={{ maxWidth: 600, mt: 2, mx: 'auto', p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Station Details - {station.id || 'N/A'}
          </Typography>

          <Stack spacing={1}>
            <Typography>
              <strong>Name:</strong> {station.stationName || 'N/A'}
            </Typography>
            <Typography>
              <strong>Contact:</strong> {station.contact || 'N/A'}
            </Typography>
            <Typography>
              <strong>Email:</strong> {station.email || 'N/A'}
            </Typography>
            <Typography>
              <strong>Address:</strong> {station.address || 'N/A'}
            </Typography>
            <Typography>
              <strong>Street:</strong> {station.street || 'N/A'}
            </Typography>
            <Typography>
              <strong>City:</strong> {station.city || 'N/A'}
            </Typography>
            <Typography>
              <strong>State:</strong> {station.state || 'N/A'}
            </Typography>
            <Typography>
              <strong>Pin Code:</strong> {station.pinCode || 'N/A'}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

// Optional: add PropTypes for developer clarity
StationView.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      stationName: PropTypes.string,
      contact: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      pinCode: PropTypes.string,
    }),
  }),
};

export default StationView;
