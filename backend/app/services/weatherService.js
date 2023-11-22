const departmentCoordinates = require('./departmentCoordinates');

const fetchWeatherDataByDepartmentCode = async (departmentCode) => {
  try {
    const { latitude, longitude } = departmentCoordinates[departmentCode];
    const today = new Date();
    const startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const endDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,cloud_cover,cloud_cover_high,wind_speed_10m,soil_temperature_0cm,soil_moisture_0_to_1cm&start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}`;

    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des données météo depuis l\'API');
  }
};

module.exports = {
  fetchWeatherDataByDepartmentCode,
};
