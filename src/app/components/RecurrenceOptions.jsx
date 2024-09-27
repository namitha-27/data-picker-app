"use client";

import React from 'react';

const RecurrenceOptions = ({ selectedOption, setSelectedOption }) => {
    const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

    return (
        <div className="mb-4">
            <label className="date-picker-label">Select Recurrence:</label>
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="date-picker-select"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RecurrenceOptions;
