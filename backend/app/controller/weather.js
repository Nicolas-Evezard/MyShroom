const weatherService = require("../services/weatherService");

const getWeatherData = async (req, res) => {
  try {
    const { departmentCode } = req.body;

    if (!departmentCode) {
      return res.status(400).json({ message: "Code de département non valide" });
    }

    const weatherData = await weatherService.fetchWeatherDataByDepartmentCode(
      departmentCode
    );

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