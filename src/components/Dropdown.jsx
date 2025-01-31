import { useState } from "react";
 
const Dropdown = ({ selectedDevice, setSelectedDevice }) => {
  const devices = ["Desktop", "Mobile"];

  return (
    <div className="text-center my-6">
      <label className="text-lg font-semibold mr-2">Choose a Device:</label>
      <select
        value={selectedDevice}
        onChange={(e) => setSelectedDevice(e.target.value)}
        className="p-2 border rounded"
      >
        {devices.map((device) => (
          <option key={device} value={device}>
            {device}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
