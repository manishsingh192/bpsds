import React from 'react';
import {
    Typography,
    Card,
    CardContent,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const DeliveryCard = () => {
    const cards = [
        {
            count: 0,
            subtitle: "Booking Delivery",
            stat: "NaN% (30 days)"
        },
        {
            count: 0,
            subtitle: "Booking Delivery",
            stat: "NaN% (30 days)"
        },
        {
            count: 0,
            subtitle: "Booking Delivery",
            stat: "NaN% (30 days)"
        }
    ];

    return (
        <>
            <Box sx={{ padding: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Manage Delivery
                </Typography>

                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                    {cards.map((card, index) => (
                        <Card key={index} sx={{ width: '20%', minWidth: 150, padding: 2 }}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">Delivery</Typography>
                                    <LocalShippingIcon />
                                </Box>
                                <Typography variant="h4" sx={{ mt: 2 }}>{card.count}</Typography>
                                <Typography color="textSecondary">{card.subtitle}</Typography>
                                <Typography color="textSecondary">{card.stat}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

            {/* Small Dropdown Section */}
            <Box sx={{ display: 'flex', gap: 2, padding: 3, flexWrap: 'wrap', alignItems: 'center' }}>
                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Driver</InputLabel>
                    <Select defaultValue="">
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Driver 1">Driver 1</MenuItem>
                        <MenuItem value="Driver 2">Driver 2</MenuItem>
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Vehicle</InputLabel>
                    <Select defaultValue="">
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Vehicle 1">Vehicle 1</MenuItem>
                        <MenuItem value="Vehicle 2">Vehicle 2</MenuItem>
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Device</InputLabel>
                    <Select defaultValue="">
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Device 1">Device 1</MenuItem>
                        <MenuItem value="Device 2">Device 2</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="contained" size="small" sx={{ height: 40 }}>
                    Add
                </Button>
            </Box>

            {/* Table Header Row */}
            <Box sx={{
                display: 'flex',
                gap: 3,
                padding: 3,
                flexWrap: 'wrap',
                backgroundColor: '#1976d2',
                borderRadius: 2
            }}>
                <Typography fontWeight={600}>Select</Typography>
                <Typography fontWeight={600}>S. No</Typography>
                <Typography fontWeight={600}>Order ID</Typography>
                <Typography fontWeight={600}>Name</Typography>
                <Typography fontWeight={600}>Start Station</Typography>
                <Typography fontWeight={600}>Destination Station</Typography>
            </Box>
        </>
    );
};

export default DeliveryCard;
