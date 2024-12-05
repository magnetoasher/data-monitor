import React from 'react';
import { Line } from 'react-chartjs-2';
import { DataPoint } from '../utils/dataGenerator';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

interface DataChartProps {
  data: DataPoint[];
}

const DataChart: React.FC<DataChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.timestamp.toLocaleTimeString()),
    datasets: [
      {
        label: 'Sensor Data',
        data: data.map((d) => d.value),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        pointBackgroundColor: '#f87171',
        pointBorderColor: '#f87171',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-64 md:h-96 p-4 rounded shadow">
      <Line data={chartData} options={options}/>
    </div>
  );
};

export default React.memo(DataChart);
