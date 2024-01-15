import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = (props) => {
  const navigate = useNavigate()
  // Define state variables for form fields
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('17:00'); // Set a default time
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Define state variable for available times
  // const [availableTimes] = useState([
  //   '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  // ]);

  const [availableTimes] = [props.props.props.state]

  // Event handlers to update state
  const handleDateChange = (event) => {
    setDate(event.target.value);
    props.props.props.changeTimes(event.target.value)
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(Number(event.target.value));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your reservation logic here
    if (props.props.props.sendForm()){
          navigate('/ConfirmedBooking')
    } else {
          window.alert('Booking submission failed. Please try again.');
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit"> Make Your reservation </button>
    </form>
  );
};

export default BookingForm;