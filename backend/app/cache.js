let weatherCache = {};

const clearCache = () => {
  weatherCache = {};
  console.log("Le cache a été vidé.");
};

const getCache = () => {
  return weatherCache;
};

module.exports = {
  clearCache,
  getCache,
};