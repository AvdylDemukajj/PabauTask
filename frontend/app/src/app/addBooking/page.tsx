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
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const today = new Date().toISOString().split('T')[0];

    if (form.date < today) {
      setError('It is not allowed to book a date in the past');
      return;
    }

    if (form.doctor_name.length < 2) {
      setError('Please fill your full name');
      return;
    }

    // Success logic would go here
    setSuccess('Booking added successfully');
    setError(null);
    setForm({ service: '', doctor_name: '', date: '', start_time: '', end_time: '' });
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 2 }}>
      {success ? (
        <Typography color="success.main">{success}</Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Typography sx={{ color: "gray", fontSize: "2rem", textAlign: "center" }}>Add a Booking</Typography>
          <TextField label="Doctor Name" name="doctor_name" value={form.doctor_name} onChange={handleChange} fullWidth required margin="normal" />
          <TextField label="Service" name="service" value={form.service} onChange={handleChange} fullWidth required margin="normal" />
          <TextField label="Date" type="date" name="date" value={form.date} onChange={handleChange} fullWidth required margin="normal" InputLabelProps={{ shrink: true, }} />
          <TextField label="Start Time" type="time" name="start_time" value={form.start_time} onChange={handleChange} fullWidth required margin="normal" InputLabelProps={{ shrink: true, }} />
          <TextField label="End Time" type="time" name="end_time" value={form.end_time} onChange={handleChange} fullWidth required margin="normal" InputLabelProps={{ shrink: true, }} />
          <Button type="submit" sx={{ mt: 2, backgroundColor: "#488598 !important", maxWidth: "550px", color: "white" }}>
            Add Booking
          </Button>
          {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
        </form>
      )}
    </Box>
  );
};

export default NewBooking;
