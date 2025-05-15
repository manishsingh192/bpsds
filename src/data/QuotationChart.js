// QuotationChart.js
import React from 'react';
import { Card, Typography, Box, Chip } from '@mui/material';
import { Line } from 'react-chartjs-2';

const QuotationChart = () => {
  const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Orders',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: '#00C4CC',
        backgroundColor: '#00C4CC',
        pointBorderColor: '#00C4CC',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <Card sx={{ p: 2, borderRadius: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">Quotation Order</Typography>
        <Chip label="Tuesday" variant="outlined" color="primary" />
      </Box>
      <Line data={data} options={options} />
    </Card>
  );
};

export default QuotationChart;
