import React from 'react';
import { BookingDetailProps } from '../types/bookingData';

const BookingDetail: React.FC<BookingDetailProps> = ({ booking }) => {
    return (
        <div>
            {booking ? (
                <div>Booking Details Placeholder</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default BookingDetail;
