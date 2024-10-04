import { CiSearch } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";

const Inputs = () => {
  return (
    <>
      <div className="flex justify-around my-6">
        <div className="left flex  space-x-3 items-center justify-center w-3/4">
          <input
            type="text"
            className="w-full py-1 px-1"
            placeholder="search by city ..."
          ></input>
          <CiSearch className="size-5" />
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
