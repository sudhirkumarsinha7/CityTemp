const googleKey = 'AIzaSyBwnnr_nApxPa1DqkpzswR_ABTmPCgdgzk';
const ENVIRONMENT = {
  dev: {
    hostName: 'https://api.openweathermap.org/data/2.5/weather?q=',
  },
  prod: {
    hostName: 'https://api.openweathermap.org/data/2.5/weather?q=',
  },
  currentEnv: 'dev',
};

export {googleKey, ENVIRONMENT};
