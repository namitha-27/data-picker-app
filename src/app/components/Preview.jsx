"use client";

import React from 'react';

const Preview = ({ startDate, endDate, selectedOption, frequency, frequencyUnit, selectedDays, nthOccurrence }) => {
    return (
        <div className="mt-4 p-4 bg-gray-800 text-gray-200 rounded shadow-md">
            <h3 className="text-lg font-semibold">Preview:</h3>
            <p>Selected Option: {selectedOption}, Every {frequency} {frequencyUnit} {nthOccurrence && ` (nth: ${nthOccurrence})`}</p>
            <p>Start Date: {startDate}</p>
            <p>End Date: {endDate}</p>
            <p>Selected Days: {selectedDays.join(', ')}</p>
        </div>
    );
};

export default Preview;
