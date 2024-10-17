import { CiSearch } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
import weather from "./weather";
import { useEffect, useState } from "react";
import TimeNlocation from "./time&location";
import { DateTime } from "luxon";
import TempNDetails from "./TempNDetails";

const Inputs = () => {
  const [city, setcity] = useState("");

  const [returnval, setreturnval] = useState(null);
  const [formatLocal, setFormatloca] = useState(null);

  const [cityy, setcityy] = useState(null);
  const [country, setcountry] = useState(null);
  const [main, setmain] = useState(null);
  const [arr, setarrr] = useState(null);
  const abc = async (e) => {
    e.preventDefault();

    const xyz = await weather(city); // prop in function sent

    if (xyz.response) {
      // return error.response.data.message;
      console.log(xyz.response.data.message);
    } else if (xyz.message) {
      // return error.message;
      console.log(xyz.message);
    } else setreturnval(xyz);
    setcity("");
  };

  useEffect(() => {
    if (returnval) {
      const formattolocaltime = (
        secs,
        offset,
        format = " cccc , dd LLL yyyy' | Local time : 'hh:mm a" //this 3rd parameter has this default format , you can call this formattolocaltime function and then pass another format which will sim-ply overide this format
      ) =>
        DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

      setFormatloca(formattolocaltime(returnval.dt, returnval.timezone));

      setarrr({
        sunrise: formattolocaltime(
          returnval.sunrise,
          returnval.timezone,
          "hh:mm a"
        ),
        sunset: formattolocaltime(
          returnval.sunset,
          returnval.timezone,
          "hh:mm a"
        ),
        temp: returnval.temp.toFixed(0),
        humidity: returnval.humidity,
        windspeed: returnval.speed.toFixed(),
        realfeel: returnval.feels_like.toFixed(),
        icons: returnval.icon,
      });

      // setsunrise(
      //   formattolocaltime(returnval.sunrise, returnval.timezone, "hh:mm a") //"hh:mm a" this code will override the format mentioned earlier
      // );
      // setsunset(
      //   formattolocaltime(returnval.sunset, returnval.timezone, "hh:mm a")
      // );

      // settemp(returnval.temp.toFixed(0));
      setcityy(returnval.name);
      setcountry(returnval.country);
      setmain(returnval.main);
    }
  }, [returnval]);

  return (
    <>
      <div className="flex justify-around my-6">
        <div className="left flex  space-x-3 items-center justify-center w-3/4">
          <form onSubmit={abc}>
            <input
              type="text"
              value={city}
              className="w-full py-1 px-1 text-black"
              placeholder="search by city ..."
              onChange={(e) => setcity(e.target.value)}
            ></input>
          </form>
          <CiSearch className="size-5" onClick={abc} />
          <IoMdLocate className="size-5" />
        </div>
        <div className="right flex space-x-1 items-center text-xl">
          <button>°C</button>

          <p>|</p>

          <button>°F</button>
          {/* <p>{timestring}</p>
          <p>{formattedtime}</p> */}
        </div>
      </div>
      <TimeNlocation
        abcd={formatLocal}
        cityy={cityy}
        country={country}
        main={main}
      />
      <TempNDetails arr={arr} />
    </>
  );
};

export default Inputs;
