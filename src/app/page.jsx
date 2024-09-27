// src/app/page.jsx
import React from 'react';
import DatePickerComponent from './components/DatePickerComponent';

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <DatePickerComponent />
        </div>
    );
};

export default Page;
