import axios from "axios";

const weather = async () => {
  const ApiKey = "4858d66228a473a4255d05de78837da2";

  const axi = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${ApiKey}`
  );
  console.log(axi);
};

export default weather;
