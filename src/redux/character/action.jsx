import * as types from './constants';
import { getAllCharacterService, getEpisodeService } from '../../service/character';

export const getAllCharacter = (url) => async (dispatch) => {
  try {
    dispatch({
      type: types.LOAD_ALL_CHARACTER_START,
    });
    const data = await getAllCharacterService(url);
    return dispatch({
      type: types.LOAD_ALL_CHARACTER_SUCCESS,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: types.LOAD_ALL_CHARACTER_ERROR,
      payload: e,
    });
  }
};
