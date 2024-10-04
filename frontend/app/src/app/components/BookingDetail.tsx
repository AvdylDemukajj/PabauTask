import React from 'react';
import { BookingDetailProps } from '../types/bookingData';
import { Card, CardContent, CircularProgress, Box } from '@mui/material';

const BookingDetail: React.FC<BookingDetailProps> = ({ booking }) => {
    return (
        <Box>
            {booking ? (
                <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 2 }}>
                    <CardContent>
                        Booking Details
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
