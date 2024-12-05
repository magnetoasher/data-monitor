// src/utils/dataGenerator.ts

export interface DataPoint {
  timestamp: Date;
  value: number;
}

let intervalId: number;

export const startDataStream = (callback: (data: DataPoint) => void) => {
  intervalId = setInterval(() => {
    const newData: DataPoint = {
      timestamp: new Date(),
      value: Math.random() * 100,
    };
    callback(newData);
  }, 3000);

  return () => clearInterval(intervalId);
};

export const generateInitialData = (numPoints: number): DataPoint[] => {
  const data: DataPoint[] = [];
  const now = new Date();

  for (let i = numPoints - 1; i >= 0; i--) {
    data.push({
      timestamp: new Date(now.getTime() - i * 3000),
      value: Math.random() * 100,
    });
  }

  return data;
};
