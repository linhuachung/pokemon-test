import { combineReducers } from '@reduxjs/toolkit';
import pokemon from '@/store/pokemon/reducer';

const rootReducer = combineReducers({
  pokemon,
});

export default rootReducer;
