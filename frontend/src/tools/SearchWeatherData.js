import axios from 'axios';

// Fonction pour récupérer les données météo depuis l'API ou le cache
export const fetchWeatherData = async (departmentCode) => {
  try {
    const cachedData = localStorage.getItem(`weather_${departmentCode}`);
    const currentDate = new Date().toISOString().slice(0, 10);

    if (cachedData) {
      const { data, date } = JSON.parse(cachedData);
      if (date === currentDate) {
        // Données déjà en cache pour aujourd'hui
        return data;
      }
    }

    // Si les données en cache ne sont pas d'aujourd'hui, récupérer depuis l'API
    const response = await axios.post('http://localhost:3000/weather', { departmentCode });
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const weatherData = response.data;

    // Mettre à jour les données dans le cache
    localStorage.setItem(`weather_${departmentCode}`, JSON.stringify({ data: weatherData, date: currentDate }));

    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
