import { combineReducers } from 'redux';
import { characterReducer } from './character/reducer';

export const rootReducer = combineReducers({
  character: characterReducer
});
