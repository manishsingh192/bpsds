import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Avatar,
  Stack,
  Card,
  CardContent
} from '@mui/material';
import { Person, Home, InsertDriveFile } from '@mui/icons-material';

const customer = {
  firstName: 'Rohit',
  middleName: 'Kumar',
  lastName: 'Sharma',
  contactNumber: '9876543210',
  email: 'rohit@example.com',
  address: '123, Sector 15',
  state: 'Uttar Pradesh',
  city: 'Noida',
  district: 'Gautam Buddha Nagar',
  pincode: '201301',
  idProof: 'Aadhar Card',
  idPhoto: '/uploads/id-photo.png',
  customerPhoto: '/uploads/customer-photo.png'
};

const InfoRow = ({ label, value }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Typography variant="body2" fontWeight={600}>{label}</Typography>
    <Typography variant="body1" color="text.secondary">{value}</Typography>
  </Grid>
);

const CustomerView = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
          Customer Details
        </Typography>

        <Card sx={{ mt: 3, p: 2 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <Person color="primary" />
              <Typography variant="h6">Personal Information</Typography>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <InfoRow label="First Name" value={customer.firstName} />
              <InfoRow label="Middle Name" value={customer.middleName} />
              <InfoRow label="Last Name" value={customer.lastName} />
              <InfoRow label="Contact Number" value={customer.contactNumber} />
              <InfoRow label="Email" value={customer.email} />
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3, p: 2 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <Home color="primary" />
              <Typography variant="h6">Address Information</Typography>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <InfoRow label="Address" value={customer.address} />
              <InfoRow label="State" value={customer.state} />
              <InfoRow label="City" value={customer.city} />
              <InfoRow label="District" value={customer.district} />
              <InfoRow label="Pincode" value={customer.pincode} />
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3, p: 2 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <InsertDriveFile color="primary" />
              <Typography variant="h6">Documents</Typography>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <InfoRow label="ID Proof Type" value={customer.idProof} />
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body2" fontWeight={600}>ID Photo</Typography>
                <Avatar
                  src={customer.idPhoto}
                  variant="rounded"
                  sx={{ width: 100, height: 100, mt: 1 }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body2" fontWeight={600}>Customer Photo</Typography>
                <Avatar
                  src={customer.customerPhoto}
                  variant="rounded"
                  sx={{ width: 100, height: 100, mt: 1 }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default CustomerView;
