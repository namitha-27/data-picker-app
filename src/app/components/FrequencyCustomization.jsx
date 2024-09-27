"use client";

import React from 'react';

const FrequencyCustomization = ({ frequency, setFrequency, frequencyUnit, setFrequencyUnit, nthOccurrence, setNthOccurrence }) => {
    return (
        <div className="mt-4">
            <label className="date-picker-label">Every:</label>
            <input
                type="number"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="date-picker-input"
                min="1"
            />
            <select
                value={frequencyUnit}
                onChange={(e) => setFrequencyUnit(e.target.value)}
                className="date-picker-select"
            >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
            </select>
            <label className="date-picker-label mt-4">Nth Occurrence (for the nth day of the month):</label>
            <input
                type="number"
                value={nthOccurrence}
                onChange={(e) => setNthOccurrence(e.target.value)}
                className="date-picker-input"
                min="1"
            />
        </div>
    );
};

export default FrequencyCustomization;
