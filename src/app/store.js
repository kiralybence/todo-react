import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../components/List/listSlice';

export const store = configureStore({
    reducer: {
        list: listReducer,
    },
});
