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

// Import the SVGs
import { ReactComponent as NoCrashIcon } from '../../../assets/station/mng1.svg'; // First SVG
import { ReactComponent as NoCrashIcon2 } from '../../../assets/station/mng2.svg'; // Second SVG

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
                        <Card key={index} sx={{
                            width: '25%',
                            minWidth: 140,
                            padding: 2,
                            borderRadius: 5,
                            transition: 'background-color 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                                color: 'white', // Optional: change text color for contrast
                            },
                        }}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    {/* Render the first SVG for all cards except the last one */}
                                    {index !== cards.length - 1 && (
                                        <NoCrashIcon width={50} height={60} />
                                    )}
                                    {/* Render only the second SVG for the last card */}
                                    {index === cards.length - 1 && (
                                        <NoCrashIcon2 width={50} height={60} />
                                    )}
                                    {/* Text next to icon */}
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h4">{card.count}</Typography>
                                        <Typography color="textSecondary">{card.subtitle}</Typography>
                                        <Typography color="textSecondary">{card.stat}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

            {/* Small Dropdown Section */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    padding: 3,
                    flexWrap: 'wrap',
                    alignItems: 'center',
                }}
            >
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

                <Box sx={{ marginLeft: 'auto' }}>
                    <Button variant="contained" size="small" sx={{ height: 40 }}>
                        Add
                    </Button>
                </Box>
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
