import React from 'react';

interface FilterProps {
  setFilterValue: React.Dispatch<React.SetStateAction<number>>;
}

const Filter: React.FC<FilterProps> = ({ setFilterValue }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(Number(e.target.value) || 0);
  };

  return (
    <div className="flex items-center space-x-2 px-4">
      <label className="text-lg">Filter Value:</label>
      <input
        type="number"
        onChange={handleChange}
        className="p-2 border rounded"
        placeholder="Enter minimum value"
      />
    </div>
  );
};

export default Filter;
