import React from 'react'

function WeatherCard({weather}) {
  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-2">{weather.name}</h2>
        <p className="text-gray-700 text-sm capitalize mb-4">
            {weather.weather[0].description}
        </p>
        <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>💧 {weather.main.humidity}%</span>
            <span>🌬 {weather.wind.speed} m/s</span>
        </div>
    </div>
  );
}

export default WeatherCard