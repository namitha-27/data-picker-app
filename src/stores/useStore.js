// src/stores/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
    selectedOption: 'Daily',
    frequency: 1,
    frequencyUnit: 'days',
    startDate: '',
    endDate: '',
    setSelectedOption: (option) => set({ selectedOption: option }),
    setFrequency: (freq) => set({ frequency: freq }),
    setFrequencyUnit: (unit) => set({ frequencyUnit: unit }),
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),
}));

export default useStore;
