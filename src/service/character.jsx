import API from './ApiService';

export const getAllCharacterService = async (url) => {
  const data = await API.get(`character/${url}`);
  return data;
};
