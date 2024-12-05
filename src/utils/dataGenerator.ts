export interface DataPoint {
  id: number;
  value: number;
  timestamp: Date;
}

export function startDataStream(
  callback: (data: DataPoint) => void
): () => void {
  const intervalId = setInterval(() => {
    const data: DataPoint = {
      id: Date.now(),
      value: parseFloat((Math.random() * 100).toFixed(2)),
      timestamp: new Date(),
    };
    callback(data);
  }, 3000);
  
  return () => clearInterval(intervalId);
}
