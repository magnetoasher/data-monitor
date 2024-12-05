import React, { useState, useEffect } from 'react';
import { DataPoint, startDataStream } from './utils/dataGenerator';
import DataStream from './components/DataStream';
import Filter from './components/Filter';

const App: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [filterValue, setFilterValue] = useState<number>(0);

  useEffect(() => {
    const stopDataStream = startDataStream((newData) => {
      setData((prevData) => [newData, ...prevData]);
    });

    return () => {
      stopDataStream();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-5xl bg-gray-800 text-white p-6 rounded-lg shadow-lg">
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
