import React from 'react';
import useStore from '../stores/useStore';

const DatePickerComponent = () => {
    const { 
        selectedOption, 
        setSelectedOption, 
        frequency, 
        setFrequency, 
        frequencyUnit, 
        setFrequencyUnit, 
        startDate, 
        setStartDate, 
        endDate, 
        setEndDate 
    } = useStore();

    return (
        <div className="p-4 bg-gray-900 text-white rounded shadow-md">
            <h2 className="text-2xl font-semibold">Select Recurring Dates</h2>
            <div className="container" style={{ backgroundColor: 'rgb(51, 51, 51)' }}>
                <div className="mb-4">
                    <label htmlFor="recurrence-select" className="date-picker-label">Select Recurrence:</label>
                    <select 
                        id="recurrence-select" 
                        className="date-picker-select" 
                        value={selectedOption} 
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
            </div>
            <div className="container" style={{ backgroundColor: 'rgb(51, 51, 51)' }}>
                <div className="mt-4">
                    <label htmlFor="every-input" className="date-picker-label">Every:</label>
                    <input
                        id="every-input"
                        className="date-picker-input"
                        type="number"
                        min="1"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                    />
                    <select 
                        id="every-unit-select" 
                        className="date-picker-select"
                        value={frequencyUnit} 
                        onChange={(e) => setFrequencyUnit(e.target.value)}
                    >
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select>
                    <label htmlFor="nth-occurrence-input" className="date-picker-label mt-4">Nth Occurrence:</label>
                    <input
                        id="nth-occurrence-input"
                        className="date-picker-input"
                        type="number"
                        min="1"
                    />
                </div>
            </div>
            <div className="container" style={{ backgroundColor: 'rgb(51, 51, 51)' }}>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded">Select Specific Days:</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {/* Buttons for selecting days can go here */}
                    </div>
                </div>
            </div>
            <div className="container" style={{ backgroundColor: 'rgb(51, 51, 51)' }}>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white bg-gray-800 p-2 rounded">Start Date:</h3>
                    <input
                        aria-label="Start Date"
                        className="mt-1 block w-full border-none p-1 text-base text-white bg-transparent focus:ring focus:ring-indigo-200"
                        id="start-date-input"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white bg-gray-800 p-2 rounded">End Date:</h3>
                    <input
                        aria-label="End Date"
                        className="mt-1 block w-full border-none p-1 text-base text-white bg-transparent focus:ring focus:ring-indigo-200"
                        id="end-date-input"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default DatePickerComponent;
