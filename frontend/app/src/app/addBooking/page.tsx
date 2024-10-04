"use client"
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { BookingData } from '../types/bookingData';

const NewBooking: React.FC = () => {
  const [form, setForm] = useState<BookingData>({
    service: '',
    doctor_name: '',
    date: '',
    start_time: '',
    end_time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography>New Booking Form</Typography>
    </Box>
  );
};

export default NewBooking;
