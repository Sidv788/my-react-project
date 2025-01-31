import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const Graph = ({ metric, selectedDevice }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${selectedDevice.toLowerCase()}`
      );
      const result = await response.json();
      setData(result.values || []);
    };
    fetchData();
  }, [metric, selectedDevice]);

  const options = {
    xAxis: {
      type: "category",
      data: data.map((_, i) => i + 1),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data,
        type: "line",
      },
    ],
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <div className="border border-gray-300 dark:border-gray-600  shadow-md bg-white ">
      <ReactECharts option={options} style={{ height: 300 }} />
    </div>
    </div>
  );
};

export default Graph;
