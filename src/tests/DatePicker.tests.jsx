import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../app/components/DatePicker'; // Update based on actual path
import React from 'react'; // Add this line


test('renders DatePicker', () => {
    const startDate = '2024-09-26';
    const endDate = '2024-10-01';
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const setRecurrenceOption = jest.fn();
    const recurrenceOption = 'Daily';

    render(
        <DatePicker 
            startDate={startDate} 
            setStartDate={setStartDate} 
            endDate={endDate} 
            setEndDate={setEndDate}
            recurrenceOption={recurrenceOption}
            setRecurrenceOption={setRecurrenceOption}
        />
    );

    expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/recurrence/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/every/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nth occurrence/i)).toBeInTheDocument();
});
