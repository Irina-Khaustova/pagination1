import { configureStore } from '@reduxjs/toolkit';
import  selectPage  from '../store/slices/sliceSelectPage';

export const store = configureStore({
    reducer: {
        selectPage: selectPage,
    },
  });

