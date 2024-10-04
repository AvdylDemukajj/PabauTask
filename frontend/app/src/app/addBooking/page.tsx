"use client"
import React, { useState } from 'react';
import { BookingData } from '../types/bookingData';
import { Box, Button, TextField, Typography } from '@mui/material';

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
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 2 }}>
      <form>
        <Typography sx={{ color: "gray", fontSize: "2rem", textAlign: "center" }}>Add a Booking</Typography>
        <TextField label="Doctor Name" name="doctor_name" value={form.doctor_name} onChange={handleChange} fullWidth required margin="normal" />
        <TextField label="Service" name="service" value={form.service} onChange={handleChange} fullWidth required margin="normal" />
        <TextField label="Date" type="date" name="date" value={form.date} onChange={handleChange} fullWidth required margin="normal" InputLabelProps={{ shrink: true, }} />
        <TextField label="Start Time" type="time" name="start_time" value={form.start_time} onChange={handleChange} fullWidth required margin="normal" InputLabelProps={{ shrink: true, }} />
        <TextField label="End Time" type="time" name="end_time" value={form.end_time} onChange={handleChange} fullWidth required margin="normal" InputLabelProps={{ shrink: true, }} />
        <Button type="submit" sx={{ mt: 2, backgroundColor: "#488598 !important", maxWidth: "550px", color: "white" }}>
          Add Booking
        </Button>
      </form>
    </Box>
  );
};

export default NewBooking;
