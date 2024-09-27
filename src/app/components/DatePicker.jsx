// "use client";

// import React from 'react';
// import { CalendarIcon } from '@heroicons/react/outline';

// const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
//     const handleStartDateChange = (e) => {
//         const newStartDate = e.target.value;
//         if (newStartDate <= endDate) {
//             setStartDate(newStartDate);
//         } else {
//             alert("Start date cannot be later than end date.");
//         }
//     };

//     const handleEndDateChange = (e) => {
//         const newEndDate = e.target.value;
//         if (newEndDate >= startDate) {
//             setEndDate(newEndDate);
//         } else {
//             alert("End date cannot be earlier than start date.");
//         }
//     };

//     return (
//         <div className="mt-4">
//             <div className="flex flex-col">
//                 <h3 className="text-xl font-semibold text-white bg-gray-800 p-2 rounded">Start Date:</h3>
//                 <div className="flex items-center border border-gray-300 rounded-md bg-gray-900 p-1">
//                     <CalendarIcon className="h-5 w-5 text-blue-400 mr-2 cursor-pointer" />
//                     <input
//                         id="start-date-input"
//                         type="date"
//                         value={startDate}
//                         onChange={handleStartDateChange}
//                         className="mt-1 block w-full border-none p-1 text-base text-white bg-transparent focus:ring focus:ring-indigo-200"
//                         aria-label="Start Date"
//                     />
//                 </div>
//             </div>
//             <div className="flex flex-col mt-4">
//                 <h3 className="text-xl font-semibold text-white bg-gray-800 p-2 rounded">End Date:</h3>
//                 <div className="flex items-center border border-gray-300 rounded-md bg-gray-900 p-1">
//                     <CalendarIcon className="h-5 w-5 text-blue-400 mr-2 cursor-pointer" />
//                     <input
//                         id="end-date-input"
//                         type="date"
//                         value={endDate}
//                         onChange={handleEndDateChange}
//                         className="mt-1 block w-full border-none p-1 text-base text-white bg-transparent focus:ring focus:ring-indigo-200"
//                         aria-label="End Date"
//                     />
//                 </div>
//             </div>

//             {/* Recurrence Selection */}
//             <div className="flex flex-col mt-4">
//                 <label className="text-xl font-semibold text-white bg-gray-800 p-2 rounded" htmlFor="recurrence-select">
//                     Select Recurrence:
//                 </label>
//                 <select
//                     id="recurrence-select"
//                     className="mt-1 block w-full border border-gray-300 rounded-md bg-gray-900 p-1 text-base text-white focus:ring focus:ring-indigo-200"
//                     aria-label="Recurrence"
//                 >
//                     <option value="none">None</option>
//                     <option value="daily">Daily</option>
//                     <option value="weekly">Weekly</option>
//                     <option value="monthly">Monthly</option>
//                     <option value="yearly">Yearly</option>
//                     {/* Add more options as needed */}
//                 </select>
//             </div>
//         </div>
//     );
// };

// export default DatePicker;
"use client";

import React from 'react';
import { CalendarIcon } from '@heroicons/react/outline';

const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
    const handleStartDateChange = (e) => {
        const newStartDate = e.target.value;
        if (newStartDate <= endDate) {
            setStartDate(newStartDate);
        } else {
            alert("Start date cannot be later than end date.");
        }
    };

    const handleEndDateChange = (e) => {
        const newEndDate = e.target.value;
        if (newEndDate >= startDate) {
            setEndDate(newEndDate);
        } else {
            alert("End date cannot be earlier than start date.");
        }
    };

    return (
        <div className="mt-4">
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-white bg-gray-800 p-2 rounded">Start Date:</h3>
                <div className="flex items-center border border-gray-300 rounded-md bg-gray-900 p-1">
                    <CalendarIcon className="h-5 w-5 text-blue-400 mr-2 cursor-pointer" />
                    <input
                        id="start-date-input"
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        className="mt-1 block w-full border-none p-1 text-base text-white bg-transparent focus:ring focus:ring-indigo-200"
                        aria-label="Start Date"
                    />
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <h3 className="text-xl font-semibold text-white bg-gray-800 p-2 rounded">End Date:</h3>
                <div className="flex items-center border border-gray-300 rounded-md bg-gray-900 p-1">
                    <CalendarIcon className="h-5 w-5 text-blue-400 mr-2 cursor-pointer" />
                    <input
                        id="end-date-input"
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        className="mt-1 block w-full border-none p-1 text-base text-white bg-transparent focus:ring focus:ring-indigo-200"
                        aria-label="End Date"
                    />
                </div>
            </div>

            {/* Recurrence Selection */}
            <div className="flex flex-col mt-4">
                <label className="text-xl font-semibold text-white bg-gray-800 p-2 rounded" htmlFor="recurrence-select">
                    Select Recurrence:
                </label>
                <select
                    id="recurrence-select"
                    className="mt-1 block w-full border border-gray-300 rounded-md bg-gray-900 p-1 text-base text-white focus:ring focus:ring-indigo-200"
                    aria-label="Recurrence"
                >
                    <option value="none">None</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>
    );
};

export default DatePicker;
