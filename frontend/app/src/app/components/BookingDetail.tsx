import React from 'react';
import { BookingDetailProps } from '../types/bookingData';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const BookingDetail: React.FC<BookingDetailProps> = ({ booking }) => {
    return (
        <Box>
            {booking ? (
                <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Booking Details
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                            This Booking is with {booking.doctor_name} for {booking.service}
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <Box className='loader-parent'>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
};

export default BookingDetail;
