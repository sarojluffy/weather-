import { CiSearch } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
import weather from "./weather";
import { useEffect, useState } from "react";
import TimeNlocation from "./time&location";
import { DateTime } from "luxon";

const Inputs = () => {
  const [city, setcity] = useState("");

  const [returnval, setreturnval] = useState(null);
  const [timestring, settimestring] = useState(null);
  const [formattedtime, setformattime] = useState(null);
  const abc = async (e) => {
    e.preventDefault();

    const xyz = await weather(city); // prop in function sent
    setreturnval(xyz);
  };

  useEffect(() => {
    if (returnval) {
      console.log(returnval);
      const date = new Date(returnval.dt * 1000); //the date receives the date object

      //   console.log(date);

      settimestring(
        date.toLocaleDateString("en-US", {
          weekday: "long", // "Tuesday"
          day: "numeric", // "14"
          month: "short", // "May"
          year: "numeric", // "2024"
        })
      );
      setformattime(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true, // For 12-hour format with AM/PM
        })
      );
    }
  }, [returnval]);
  //   const formattolocaltime = (
  //     secs,
  //     offset,
  //     format = " cccc , dd LLL yyyy' | Local time : 'hh:mm a "
  //   ) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

  //   const formattedlocalocaltime = formattolocaltime(
  //     returnval.dt,
  //     returnval.timezone
  //   );

  return (
    <>
      <div className="flex justify-around my-6">
        <div className="left flex  space-x-3 items-center justify-center w-3/4">
          <form onSubmit={abc}>
            <input
              type="text"
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
          <p>{timestring}</p>
          <p>{formattedtime}</p>
        </div>
      </div>
      <TimeNlocation />
      <div></div>
    </>
  );
};

export default Inputs;
