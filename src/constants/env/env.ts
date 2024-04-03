const env = import.meta.env;

const ENV = {
  API_URL: env.VITE_API_ENDPOINT,
  STALETIME: 1000 * 30,
};

export default ENV;
