const weatherService = require('../services/weatherService');
const weatherCache = require('../cache');

const getWeatherData = async (req, res) => {
  try {
    const { departmentCode } = req.body;
    console.log("1");
    if (!departmentCode) {
      return res.status(400).json({ message: 'Code de département non valide' });
    }
    console.log("2");
    if (weatherCache[departmentCode]) {
      return res.status(200).json(weatherCache[departmentCode]);
    }
    console.log("3");
    const weatherData = await weatherService.fetchWeatherDataByDepartmentCode(departmentCode);
    console.log("4");
    weatherCache[departmentCode] = weatherData;
    console.log("5");
    res.status(200).json(weatherData);
    console.log("6");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des données météo' });
    console.log("7");
  }
};

module.exports = {
  getWeatherData,
};
