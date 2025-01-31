import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Graph from "./components/Graph";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("Desktop");

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className="text-center w-4/5 mx-auto text-2xl md:text-4xl lg:text-5xl font-bold my-4">
        SpeedVitals Internship Assessment
      </h1>{" "}
      <Dropdown
        selectedDevice={selectedDevice}
        setSelectedDevice={setSelectedDevice}
      />
      <div className="flex flex-wrap justify-center gap-4">
        <Graph metric="cls" selectedDevice={selectedDevice} />
        <Graph metric="lcp" selectedDevice={selectedDevice} />
      </div>
    </div>
  );
};
export default App;
