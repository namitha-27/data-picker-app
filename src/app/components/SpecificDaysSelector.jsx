// src/app/components/SpecificDaysSelector.jsx
"use client";

import React from 'react';

const SpecificDaysSelector = ({ selectedDays, setSelectedDays }) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const toggleDay = (day) => {
        setSelectedDays(prev => 
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded">Select Specific Days:</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
                {daysOfWeek.map((day) => (
                    <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`border border-gray-600 rounded p-2 transition-colors ${
                            selectedDays.includes(day) ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
                        }`}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SpecificDaysSelector;
