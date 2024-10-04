import React from 'react';
import Link from 'next/link';
import { getBookings } from './hooks/use-request';
import BookingList from './components/BookingList';
import { Booking } from './types/bookingData';
import { Box, Button, Typography } from '@mui/material';

const Home: React.FC = async () => {
  let bookings: Booking[] = [];
  let error: string | null = null;

  const { data, error: fetchError } = await getBookings();
  if (fetchError) {
    error = fetchError;
  } else {
    bookings = data || [];
  }

  return (
    <Box>
      {/* Placeholder for content */}
    </Box>
  );
};


export default Home;
