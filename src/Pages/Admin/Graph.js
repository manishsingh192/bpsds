import React from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  Chip,
  useTheme,
  Divider,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Sunday', value: 0 },
  { name: 'Monday', value: 0 },
  { name: 'Tuesday', value: 0 },
  { name: 'Wednesday', value: 0 },
  { name: 'Thursday', value: 0 },
  { name: 'Friday', value: 0 },
  { name: 'Saturday', value: 0 },
];

const Graph = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f8f9', minHeight: '100vh' }}>
      <Grid container spacing={3}>
        {/* Top Left Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Quotation & Booking Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography color="primary" fontWeight={500}>
                  Quotation
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: '#28a745', fontWeight: 500 }}>
                  Booking
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Bookings
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Cancelled
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Revenue
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Top Right - Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Box display="flex" justifyContent="space-between" 
            alignItems="center" mb={2}>
              <Typography variant="h6" fontWeight={600}>
                Quotation Orders
              </Typography>
              <Chip
                label="Wednesday"
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 2, fontWeight: 500 }}
              />
            </Box>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <Box mt={2}>
              <Chip
                label="Orders"
                sx={{
                  backgroundColor: '#25c6da',
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 500,
                  borderRadius: 1,
                }}
              />
            </Box>
          </Card>
        </Grid>

        {/* Bottom Left - Total Revenue */}
       
      </Grid>
    </Box>
  );
};

export default Graph;
