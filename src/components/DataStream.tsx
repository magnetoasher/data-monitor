import React, { useMemo } from 'react';
import { DataPoint } from '../utils/dataGenerator';
import DataChart from './DataChart';

interface DataStreamProps {
  data: DataPoint[];
  filterValue: number;
}

const MAX_DATA_POINTS = 30;

const DataStream: React.FC<DataStreamProps> = ({ data, filterValue }) => {
  const filteredData = useMemo(() => {
    return data.filter((item) => item.value >= filterValue);
  }, [data, filterValue]);
  const limitedData = filteredData.slice(0, MAX_DATA_POINTS);

  return (
    <div className="mt-4">
      {filteredData.length > 0 ? (
        <DataChart data={limitedData} />
      ) : (
        <p className="text-gray-500">No data matches the filter criteria.</p>
      )}
    </div>
  );
};

export default DataStream;
