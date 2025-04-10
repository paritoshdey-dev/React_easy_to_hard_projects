import { useState } from 'react'
import WeatherCard from './WeatherCard'
function App() {
  const [city, setCity] = useState('')
  const [weather,setWeather]=useState(null);

  const fetchWeather=async()=>{
    if(!city) return;
    const apiKey=import.meta.env.VITE_WEATHER_API_KEY;
    const res=await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    if(data.cod===200){
      setWeather(data);
    } else{
      setWeather(null);
      alert("City not found")
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-400 flex flex-col items-center justify-center p-4">
      <h1 className='text-3xl font-bold mb-6 text-white'></h1>
      <div className="flex gap-2 mb-6">
        <input
        type='text'
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder='Enter city'
        className="px-4 py-2 rounded-md shadow-lg focus:outline-none"
        />
        <button
        onClick={fetchWeather}
        className='bg-white px-4 py-2 rounded-md shadow-md hover:bg-gray-100'
        >
          Search</button>
      </div>
      {weather && <WeatherCard weather={weather}/>}
    </div>
  )
}

export default App
