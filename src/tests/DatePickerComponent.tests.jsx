import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePickerComponent from '../app/components/DatePickerComponent';
import useStore from '../stores/useStore';
import '@testing-library/jest-dom';

jest.mock('../stores/useStore'); // Adjusted relative path

// Mocking the useStore
test('renders DatePickerComponent with all required components', () => {
    useStore.mockReturnValue({
        selectedOption: 'Daily',
        setSelectedOption: jest.fn(),
        frequency: 1,
        setFrequency: jest.fn(),
        frequencyUnit: 'days',
        setFrequencyUnit: jest.fn(),
        startDate: '2024-09-26',
        setStartDate: jest.fn(),
        endDate: '2024-10-01',
        setEndDate: jest.fn(),
    });

    render(<DatePickerComponent />);

    expect(screen.getByText(/select recurring dates/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select recurrence/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/every/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nth occurrence/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/end date/i)).toBeInTheDocument();
});
