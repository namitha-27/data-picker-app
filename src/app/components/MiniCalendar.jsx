// src/app/components/MiniCalendar.jsx
import React from 'react';
import { format, addDays } from 'date-fns';

const MiniCalendar = ({ startDate, endDate, selectedOption, frequency, frequencyUnit }) => {
    const isValidDate = (date) => {
        return date instanceof Date && !isNaN(date);
    };

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (!isValidDate(startDateObj) || !isValidDate(endDateObj)) {
        console.error('Invalid date values:', startDate, endDate);
        return <div className="text-red-500">Error: Invalid date range.</div>; // Error message
    }

    const generateRecurringDates = () => {
        const dates = [];
        let currentDate = startDateObj;

        // Generate dates based on frequency
        while (currentDate <= endDateObj) {
            dates.push(format(currentDate, 'yyyy-MM-dd'));
            switch (frequencyUnit) {
                case 'days':
                    currentDate = addDays(currentDate, frequency);
                    break;
                case 'weeks':
                    currentDate = addDays(currentDate, frequency * 7);
                    break;
                case 'months':
                    currentDate.setMonth(currentDate.getMonth() + frequency);
                    break;
                case 'years':
                    currentDate.setFullYear(currentDate.getFullYear() + frequency);
                    break;
                default:
                    break;
            }
        }

        return dates;
    };

    const recurringDates = generateRecurringDates();

    return (
        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">Recurring Dates:</h3>
            <div className="grid grid-cols-7 gap-1 text-white">
                {Array.from({ length: 7 }).map((_, index) => (
                    <div key={index} className="font-bold text-center">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
                    </div>
                ))}
                {recurringDates.map((date) => {
                    const dateObj = new Date(date);
                    const day = dateObj.getDay();
                    return (
                        <div
                            key={date}
                            className={`p-2 text-center ${dateObj >= startDateObj && dateObj <= endDateObj ? 'bg-blue-500 rounded-full' : ''}`}
                        >
                            {dateObj.getDate()}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MiniCalendar;
