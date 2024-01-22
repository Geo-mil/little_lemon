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

  test('date input has HTML5 validation attributes', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const dateInput = screen.getByLabelText(/Choose date/i);

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
  });

  test('guests input has HTML5 validation attributes', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const numberInput = screen.getByLabelText(/Number of guests/i);

    expect(numberInput).toHaveAttribute('type', 'number');
    expect(numberInput).toHaveAttribute('required');
  });

  test('time input has HTML5 validation attributes', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const timeInput = screen.getByLabelText(/Choose time/i);

    expect(timeInput).toHaveAttribute('required');
  });

  test('occasion input has HTML5 validation attributes', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const timeInput = screen.getByLabelText(/Occasion/i);

    expect(timeInput).toHaveAttribute('required');
  });

  test('handleDateChange sets date and isDateValid for valid date', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2024-12-20' } });

    expect(screen.getByDisplayValue('2024-12-20')).toBeInTheDocument();
    expect(screen.queryByText(/Please choose a valid date/i)).not.toBeInTheDocument();
  });

  test('handleDateChange sets isDateValid for invalid date', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByText(/Please choose a valid date/i)).toBeInTheDocument();
  });

  test('handleTimeChange sets time and isTimeValid for valid time', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: '19:00' } });

    expect(screen.getByDisplayValue('19:00')).toBeInTheDocument();
    expect(screen.queryByText(/Please choose a valid time/i)).not.toBeInTheDocument();
  });

  test('handleTimeChange sets isTimeValid for invalid time', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: '10:00' } });

    expect(screen.getByDisplayValue('17:00')).toBeInTheDocument();
    expect(screen.getByText(/Please choose a valid time/i)).toBeInTheDocument();
  });

  test('handleGuestsChange sets guests and isGuestsValid for valid guests', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '4' } });

    expect(screen.getByDisplayValue('4')).toBeInTheDocument();
    expect(screen.queryByText(/Please input a number of guests between 1 and 10/i)).not.toBeInTheDocument();
  });

  test('handleGuestsChange sets isGuestsValid for invalid guests', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '0' } });

    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    expect(screen.getByText(/Please input a number of guests between 1 and 10/i)).toBeInTheDocument();
  });

  test('handleOccasionChange sets occasion and isOccasionValid for valid occasion', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const OccasionInput = screen.getByLabelText(/Occasion/i);
    fireEvent.change(OccasionInput, { target: { value: 'Birthday' } });

    expect(screen.getByDisplayValue('Birthday')).toBeInTheDocument();
    expect(screen.queryByText(/Please input a valid occasion/i)).not.toBeInTheDocument();
  });

  test('handleOccasionChange sets isOccasionValid for invalid time', () => {

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

    render(<Router><BookingForm {...props} /></Router>);

    const OccasionInput = screen.getByLabelText(/Occasion/i);
    fireEvent.change(OccasionInput, { target: { value: 'Other' } });

    expect(screen.getByDisplayValue('Birthday')).toBeInTheDocument();
    expect(screen.getByText(/Please input a valid occasion/i)).toBeInTheDocument();
  });
});