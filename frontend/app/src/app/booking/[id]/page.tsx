import React from 'react';
import { getBookingsById } from '@/app/hooks/use-request';

const BookingDetailPage: React.FC = async ({ params }) => {
    const { id } = params;
    const { data, error } = await getBookingsById(parseInt(id));

    return (
        <div>Booking Detail Page Placeholder</div>
    );
};

export default BookingDetailPage;
