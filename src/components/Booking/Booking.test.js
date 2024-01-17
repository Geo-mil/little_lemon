import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router
import '@testing-library/jest-dom/extend-expect'; // for better matching

import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  test('initial availableTimes is populated and updates when selecting a date', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    // Mock the props
    const props = {
      props: {
        props: {
          state: initialState,
          changeTimes: jest.fn(),
          sendForm: jest.fn(),
        },
      },
    };

    // Render the BookingForm with the mocked props
    render(<Router><BookingForm {...props} /></Router>);

    // Assert that the initial availableTimes is populated
    initialState.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });

    // Simulate changing the date
    const newDate = '2024-12-25';
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: newDate } });

    // Assert that the changeTimes function was called with the new date
    expect(props.props.props.changeTimes).toHaveBeenCalledWith(newDate);

  });
});