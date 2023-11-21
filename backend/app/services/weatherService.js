const departmentCoordinates = require('./departmentCoordinates'); // Importer la correspondance

const fetchWeatherDataByDepartmentCode = async (departmentCode) => {
  try {
    const { latitude, longitude } = departmentCoordinates[departmentCode];
    const today = new Date();
    const startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 jours avant
    const endDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 jours après

    // Construction de l'URL avec les coordonnées et la plage de dates pour l'appel à l'API météo
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude} //TODO start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}`;

    // Effectuer l'appel HTTP à l'API météo
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