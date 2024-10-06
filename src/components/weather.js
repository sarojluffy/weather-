import axios from "axios";

const ApiKey = "4858d66228a473a4255d05de78837da2";
const weather = async (city) => {
  try {
    const axi = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
    );

    console.log(axi);
    const { //destrcuturing
      coord: { lat, lon },
      main: { temp, feels_like, temp_max, temp_min, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },,
      weather,
      wind: { speed },
      timezone,
    } = axi.data;

    return weather;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
    } else {
      console.log(error.message);
    }

    // console.error(error.response?.data.message || error.message);
  }
};

export default weather;
