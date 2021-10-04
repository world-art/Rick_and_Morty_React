import API from './ApiService';

export const getEpisodeService = async (id) => {
  const data = await API.get(`episode/${id}`);
  return data;
};
