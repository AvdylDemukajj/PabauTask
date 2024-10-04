import React from 'react';
import BookingDetail from '@/app/components/BookingDetail';
import { getBookingsById } from '@/app/hooks/use-request';
import { Typography } from '@mui/material';

const BookingDetailPage: React.FC = async ({ params }) => {
    const { id } = params;
    const { data, error } = await getBookingsById(parseInt(id));

    if (error) {
        return <p style={{ color: "red", textAlign:"center", marginTop: "20px", fontSize: "25px" }}>Error: {error}</p>;
    }

    if (data) {
        return <BookingDetail booking={data} />;
    } else {
        return <Typography>No bookings found.</Typography>;
    }
};

export default BookingDetailPage;
