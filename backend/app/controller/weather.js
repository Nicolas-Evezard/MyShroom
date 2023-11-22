const weatherService = require('../services/weatherService');
const weatherCache = require('../cache');

const getWeatherData = async (req, res) => {
  try {
    const { departmentCode } = req.body;

    if (!departmentCode) {
      return res.status(400).json({ message: 'Code de département non valide' });
    }

    if (weatherCache[departmentCode]) {
      return res.status(200).json(weatherCache[departmentCode]);
    }

    const weatherData = await weatherService.fetchWeatherDataByDepartmentCode(departmentCode);

    weatherCache[departmentCode] = weatherData;

    res.status(200).json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des données météo' });
  }
};

module.exports = {
  getWeatherData,
};
