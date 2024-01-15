import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('should update date state when date input is changed', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    expect(dateInput.value).toBe('2022-01-01');
  });

  test('should update time state when time select is changed', () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText('Choose time');
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    expect(timeSelect.value).toBe('18:00');
  });

  test('should update guests state when guests input is changed', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput.value).toBe('5');
  });

  test('should update occasion state when occasion select is changed', () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText('Occasion');
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
    expect(occasionSelect.value).toBe('Anniversary');
  });

  test('should call handleSubmit when submit button is clicked', () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByText('Make Your reservation');
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});