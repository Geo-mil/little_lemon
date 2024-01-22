import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = (props) => {
  const navigate = useNavigate()
  // Define state variables for form fields
  const [date, setDate] = useState("")
  const [isDateValid, setIsDateValid] = useState(true)
  const [time, setTime] = useState('17:00')
  const [isTimeValid, setTimeValid] = useState(true)
  const [guests, setGuests] = useState(1)
  const [isGuestsValid, setGuestsValid] = useState(true)
  const [occasion, setOccasion] = useState('Birthday')
  const [isOccasionValid, setOcasionValid] = useState(true)

  const [availableTimes] = [props.props.props.state]

  // Event handlers to update state
  const handleDateChange = (event) => {
    // la fecha escogida (even.target.valueAsDate) es posterior a la actual
    const currentDate = new Date()
    currentDate.setHours(0,0,0,0)
    const selectedDate = new Date(event.target.value)
    selectedDate.setHours(0,0,0,0)

    if (selectedDate < currentDate){
      setIsDateValid(false)
      setDate("")
    } else {
      setDate(event.target.value);
      props.props.props.changeTimes(event.target.value)
      setIsDateValid(true)
    }
  }

  const handleTimeChange = (event) => {
    if(availableTimes.find((time) => time === event.target.value)){
      setTime(event.target.value)
      setTimeValid(true)
    }else{
      setTime(availableTimes[0])
      setTimeValid(false)
    }
  }

  const handleGuestsChange = (event) => {
    if((Number(event.target.value) < 1)||(Number(event.target.value) > 10)){
      setGuests(Number(event.target.value))
      setGuestsValid(false)
    }else{
      setGuests(Number(event.target.value))
      setGuestsValid(true)
    }
  };

  const handleOccasionChange = (event) => {
    if((event.target.value === "Birthday")||(event.target.value === "Anniversary")){
      setOccasion(event.target.value)
      setOcasionValid(true)
    }else{
      setOccasion(event.target.value)
      setOcasionValid(false)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your reservation logic here
    if(isDateValid && isGuestsValid && isTimeValid && isOccasionValid){
      if (props.props.props.sendForm()){
            navigate('/ConfirmedBooking')
      } else {
            window.alert('Booking submission failed. Please try again.')
      }
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>
      {!isDateValid && <p style={{ color: '#EE9972' }}>Please choose a valid date</p>}

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange} required>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>{availableTime}</option>
        ))}
      </select>
      {!isTimeValid && <p style={{ color: '#EE9972' }}>Please choose a valid time</p>}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required/>
      {!isGuestsValid && <p style={{ color: '#EE9972' }}>Please input a number of guests between 1 and 10</p>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {!isOccasionValid && <p style={{ color: '#EE9972' }}>Please input a valid occasion</p>}

      <button type="submit" aria-label="Make your reservation"> Make your reservation </button>
    </form>
  );
};

export default BookingForm;