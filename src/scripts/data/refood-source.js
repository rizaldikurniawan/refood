import API_ENDPOINT from '../globals/api-endpoint';

class RefoodsSource {
  static async getAllRefoods() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      if (!response.ok) {
        throw new Error('Failed to fetch refoods data');
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching refoods data:', error);
      return { data: { refoods: [] } };
    }
  }

  static async getRefoodDetail(idLimbah) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(idLimbah));
      if (!response.ok) {
        throw new Error('Failed to fetch refood detail');
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error fetching refood detail: ${error.message}`);
    }
  }

  static async addRefood(idLimbah, refoodData) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(refoodData),
      };
      const response = await fetch(API_ENDPOINT.ADD_REFOOD(idLimbah), requestOptions);
      if (!response.ok) {
        throw new Error('Failed to add refood');
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error adding refood: ${error.message}`);
    }
  }

  static async editRefood(idLimbah, idPengolahan, refoodData) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(refoodData),
      };
      const response = await fetch(API_ENDPOINT.EDIT_REFOOD(idLimbah, idPengolahan), requestOptions);
      if (!response.ok) {
        throw new Error('Failed to edit refood');
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error editing refood: ${error.message}`);
    }
  }

  static async deleteRefood(idLimbah, idPengolahan) {
    try {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(API_ENDPOINT.DELETE_REFOOD(idLimbah, idPengolahan), requestOptions);
      if (!response.ok) {
        throw new Error('Failed to delete refood');
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error deleting refood: ${error.message}`);
    }
  }

  static async login(username, password) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      };
      const response = await fetch(API_ENDPOINT.LOGIN, requestOptions);
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  }
}

export default RefoodsSource;
