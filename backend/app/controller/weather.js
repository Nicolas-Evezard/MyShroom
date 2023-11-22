const weatherService = require("../services/weatherService");
const cache = require("../cache");

const clearCacheTwiceDaily = () => {
  cache.clearCache();
};

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if ((hours === 0 || hours === 12) && minutes === 0) {
    clearCacheTwiceDaily();
  }
}, 60000);

const getWeatherData = async (req, res) => {
  try {
    const { departmentCode } = req.body;

    if (!departmentCode) {
      return res
        .status(400)
        .json({ message: "Code de département non valide" });
    }

    const weatherCache = cache.getCache();
    if (weatherCache[departmentCode]) {
      return res.status(200).json(weatherCache[departmentCode]);
    }

    const weatherData = await weatherService.fetchWeatherDataByDepartmentCode(
      departmentCode
    );

    weatherCache[departmentCode] = weatherData;

    res.status(200).json(weatherData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des données météo" });
  }
};

module.exports = {
  getWeatherData,
};
