import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "./contexts/ThemeContext";
import { DataPoint, generateInitialData, startDataStream } from "./utils/dataGenerator";
import DataStream from "./components/DataStream";
import Filter from "./components/Filter";
import { MAX_DATA_POINTS } from "./constants";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [data, setData] = useState<DataPoint[]>(generateInitialData(MAX_DATA_POINTS));
  const [filterValue, setFilterValue] = useState<number>(0);

  useEffect(() => {
    const stopDataStream = startDataStream((newData) => {
      setData((prevData) => {
        const updatedData = [newData, ...prevData];
        return updatedData.slice(0, MAX_DATA_POINTS);
      });
    });

    return () => {
      stopDataStream();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full max-w-5xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg">
        <button
          onClick={toggleTheme}
          className={`absolute top-4 right-4 p-2 rounded-full transition focus:outline-none ${
            theme === "dark"
              ? "bg-yellow-400 hover:bg-yellow-300"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          <Icon
            icon={`mingcute:${theme === "dark" ? "sun" : "moon"}-fill`}
            className="w-6 h-6 text-white"
          />
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center">
          Sensor Data Monitor
        </h1>
        <Filter setFilterValue={setFilterValue} />
        <DataStream data={data} filterValue={filterValue} />
      </div>
    </div>
  );
};

export default App;
