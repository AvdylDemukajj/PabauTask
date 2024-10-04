import React from 'react';
import { BookingListProps } from '../types/bookingData';

const BookingList: React.FC<BookingListProps> = ({ bookings, error }) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return <div>Booking List Placeholder</div>;
};

export default BookingList;
