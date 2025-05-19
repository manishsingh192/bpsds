import React from 'react';
import {
  Grid,
  Card,
  Typography,
  Box,
  Stack,
  useTheme,
  Button,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { ReactComponent as TruckIcon } from '../../../assets/station/truck.svg';

const VehicleCard = () => {
  const theme = useTheme();

  const vehicleData = [
    {
      title: 'Available Vehicles',
      count: 0,
      change: 'NaN%',
      icon: (
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: theme.palette.primary.light,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TruckIcon style={{ width: 24, height: 24 }} />
        </Box>
      ),
    },
    {
      title: 'Total Vehicles',
      count: 0,
      change: 'NaN%',
      icon: (
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: theme.palette.primary.light,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DirectionsCarIcon fontSize="medium" />
        </Box>
      ),
    },
    {
      title: 'Deactive Vehicles',
      count: 0,
      change: '',
      icon: (
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: theme.palette.primary.light,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DirectionsCarIcon fontSize="medium" />
        </Box>
      ),
    },
    {
      title: 'Blacklisted Vehicles',
      count: 0,
      change: '',
      icon: (
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: theme.palette.primary.light,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DirectionsCarIcon fontSize="medium" />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      {/* Heading and Add Button Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight={600}>
          Manage Vehicle
        </Typography>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Box>

      <Grid container spacing={3}>
        {vehicleData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                height: '100%',
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                {/* Icon with background */}
                {item.icon}

                <Box>
                  <Typography variant="h6">{item.count}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.change ? `${item.change} (30 days)` : `(30 days)`}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VehicleCard;
