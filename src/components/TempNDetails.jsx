import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";

import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempNDetails = ({ sunrise, sunset, temp }) => {
  const details = [
    { Id: 1, Icon: FaThermometerEmpty, Title: "Real Feel", Value: "45°" },

    { Id: 2, Icon: BiSolidDropletHalf, Title: "Humidity", Value: "346%" },
    { Id: 3, Icon: FiWind, Title: "Wind", Value: "11 km/hr" },
  ];

  const details2 = [
    {
      Id: 1,
      Icon: GiSunrise,
      Title: "Sunrise",
      Value: sunrise,
    },
    {
      Id: 2,
      Icon: GiSunset,
      Title: "Sunset",
      Value: sunset,
    },
    {
      Id: 3,
      Icon: MdKeyboardArrowUp,
      Title: "High",
      Value: " 37°",
    },
    {
      Id: 4,
      Icon: MdKeyboardArrowDown,
      Title: "Low",
      Value: "7° ",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <div>
          <img src="" alt="" className="w-8 h-8"></img>
        </div>
        <div className="text-3xl"> {`${temp}°`}</div>
        <div>
          {details.map(({ Icon, Title, Value }) => {
            return (
              <>
                <div className="flex space-x-1 space-y-1 text-sm items-center">
                  <div>
                    <Icon />
                  </div>
                  <div>{`${Title}:`}</div>
                  <div>{Value}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex text-sm items-center justify-center space-x-11 py-3">
        {details2.map(({ Id, Icon, Title, Value }) => {
          return (
            <>
              <div className="flex items-center space-x-1">
                <div>
                  <Icon className="size-6" />
                </div>
                <div className="font-light">{`${Title} :`}</div>
                <div>{Value}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TempNDetails;
