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
      {bookings.length > 0 ? (
        <Box>
          <Typography sx={{ padding: 2, textAlign: "center", color: "gray", fontSize: "2rem" }}>Pabau Task</Typography>
          <BookingList bookings={bookings} error={error} />
        </Box>
      ) : (
        <Box className='loader-parent'><Box className='loader'></Box></Box>
      )}
    </Box>
  );
  
};


export default Home;
