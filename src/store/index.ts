import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from './rootReducers';

// Define your custom middleware
// const customMiddleware = (store: any) => (next: any) => (action: any) => {
//   // Your middleware logic goes here
//   // You can access the store and perform actions before and after the dispatch

//   return next(action);
// };

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    // customMiddleware
  ],
  preloadedState: {
    // Set initial state if needed
  },
  enhancers: [],
});

// Export the store type and the useDispatch hook
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
