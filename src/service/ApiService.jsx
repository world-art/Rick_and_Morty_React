import { urlServer } from '../helpers/utils';

class API {
  async get(route) {
    try {
      const response = await fetch(`${urlServer}/${route}`, {
        method: 'GET',
        mode: 'cors',
      });
      const dataServer = await response.json();
      if (response.status >= 400) throw dataServer;
      return dataServer;
    } catch (e) {
      throw e;
    }
  }
}

export default new API();
