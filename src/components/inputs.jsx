import { CiSearch } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
import weather from "./weather";
import { useState } from "react";
const Inputs = () => {
  const [city, setcity] = useState("");
  const abc = (e) => {
    e.preventDefault();
    weather(city); // prop in function sent
  };
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
        </div>
      </div>
    </>
  );
};

export default Inputs;
