import { configureStore } from '@reduxjs/toolkit';
import storyReducer from '@/features/home/stories/storySlice';
import topDoctorReducer from '@/features/home/landing/doctors/topDoctorSlice';

export const store = configureStore({
  reducer: {
    stories: storyReducer,
    topDoctors: topDoctorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
