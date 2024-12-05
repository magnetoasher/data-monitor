import React, { useMemo } from 'react';
import { DataPoint } from '../utils/dataGenerator';
import DataChart from './DataChart';

interface DataStreamProps {
  data: DataPoint[];
  filterValue: number;
}

const DataStream: React.FC<DataStreamProps> = ({ data, filterValue }) => {
  const filteredData = useMemo(() => {
    return data.filter((item) => item.value >= filterValue);
  }, [data, filterValue]);

  return (
    <div className="mt-4">
      {filteredData.length > 0 ? (
        <DataChart data={filteredData} />
      ) : (
        <p className="text-gray-500">No data matches the filter criteria.</p>
      )}
    </div>
  );
};

export default DataStream;
