import axios from "axios";
import { Booking, BookingData } from "../types/bookingData";


export async function getBookings(): Promise<{ data?: Booking[]; error?: string }> {
    try {
        const res = await fetch('http://host.docker.internal:5000/api/bookings',
            { cache: 'no-store' });

        if (!res.ok) {
            const errorData = await res.json();
            return { error: errorData.message || 'Failed to fetch bookings. Please try again later.' };
        }

        const data = await res.json();
        return { data };
    } catch (error) {
        return { error: 'Failed to fetch bookings. Please try again later.' };
    }
}

