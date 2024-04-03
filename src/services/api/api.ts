import axios from 'axios';
import ENV from '@/constants/env/env';

const BASE_URL = ENV.API_URL;

const axiosParams = {
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const requests = axios.create(axiosParams);

export default requests;
