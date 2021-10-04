import * as types from './constants';

const initialState = {
  character: [],
  info: {},
  page: 1,
  isLoading: true,
};
export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_ALL_CHARACTER_START:
      return {
        ...state,
        isLoading: true,
      }
    case types.LOAD_ALL_CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.payload.results,
        info: action.payload.info,
      };
    case types.LOAD_ALL_CHARACTER_ERROR:
      return {
        ...state,
        isLoading:false,
        character: [],
      }
    default:
      return state;
  }
};
