export default async function handler(req, res) {
  const city = req.query.city || 'New York';
  const apiKey = 'YOUR_WEATHER_API_KEY';
  //const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  //const data = await response.json();

  res.status(200).json({
    city: "Malaysia",  // data.location.name,
    temperature: "37.5",  // data.current.temp_c,
    condition: "Cloudy",   //data.current.condition.text,
  });
}
