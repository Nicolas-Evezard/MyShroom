const calculateDailyAverages = (weatherData) => {
    const hourlyData = weatherData.hourly;
    const timestamps = hourlyData.time;
    const variables = Object.keys(hourlyData).filter(key => key !== 'time');
    
    const dailyAverages = {};
  
    variables.forEach(variable => {
      const dataPoints = hourlyData[variable];
      
      for (let i = 0; i < timestamps.length; i++) {
        const date = timestamps[i].split('T')[0];
        const value = dataPoints[i];
  
        if (!dailyAverages[date]) {
          dailyAverages[date] = { sum: {}, count: {} };
        }
  
        if (!dailyAverages[date].sum[variable]) {
          dailyAverages[date].sum[variable] = 0;
        }
        if (!dailyAverages[date].count[variable]) {
          dailyAverages[date].count[variable] = 0;
        }
  
        dailyAverages[date].sum[variable] += value;
        dailyAverages[date].count[variable]++;
      }
    });
    
    const dailyAveragesResult = {};
    Object.keys(dailyAverages).forEach(date => {
      dailyAveragesResult[date] = {};
      Object.keys(dailyAverages[date].sum).forEach(variable => {
        const sum = dailyAverages[date].sum[variable];
        const count = dailyAverages[date].count[variable];
        dailyAveragesResult[date][variable] = parseFloat((sum / count).toFixed(2));
      });
    });
    
    return dailyAveragesResult;
  };
  
  module.exports = {
    calculateDailyAverages,
  };