import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}refood`,
  DETAIL: (idLimbah) => `${CONFIG.BASE_URL}refood/${idLimbah}`,
  ADD_REFOOD: (idLimbah) => `${CONFIG.BASE_URL}refood/${idLimbah}`,
  LOGIN: `${CONFIG.BASE_URL}login`,
  REGISTER: `${CONFIG.BASE_URL}register`,
};

export default API_ENDPOINT;
