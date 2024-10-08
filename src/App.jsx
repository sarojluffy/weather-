import Inputs from "./components/inputs";
import TempNDetails from "./components/TempNDetails";
import TimeNlocation from "./components/time&location";
import Topbuttons from "./components/topbuttons";

function App() {
  return (
    <>
      <div className="font-custom m-4 mx-auto  max-w-screen-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-5  mt-4 px-36 shadow-xl shadow-gray-500">
        <Topbuttons />

        <Inputs />

        <TempNDetails />
      </div>
    </>
  );
}

export default App;
