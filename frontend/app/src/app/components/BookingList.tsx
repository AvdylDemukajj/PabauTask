import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';

const BookingList: React.FC<BookingListProps> = ({ bookings, error }) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Booking</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>Booking on {booking.date}</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
