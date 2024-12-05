# Sensor Data Monitor

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/magnetoasher/data-monitor.git
```

2. cd data-monitor
3. npm install
4. npm run dev
5. Open your browser at `http://localhost:3000`

## Tech Stack

- React with TypeScript
- Vite: Build tool for fast development
- Tailwind CSS: Utility-first CSS framework
- Chart.js: For data visualization

## Features

- Real-Time Data Simulation: Data is generated every second to mimic a live sensor data stream.
- Data Visualization with Chart.js: Displays data using a responsive line chart.
- Filtering and Highlighting: Users can filter data based on a minimum value.
- Responsive Design: Optimized for various screen sizes.

## Components

- Data Generation: Created a `dataGenerator.ts` utility that uses `setInterval` to emit data every second.
- Filter Component: Provides an input for users to set the minimum filter value.
- DataStream Component: Filters data based on the `filterValue`, and passes filtered data to the `DataChart` component.
- DataChart Component: Renders a line chart using Chart.js

## Implementation

- Filtering: Implemented in the `DataStream` component by filtering the data array.
- Highlighting: In the `DataChart` component, data points exceeding a value of 80 are highlighted in red.

## Performance Optimization

- Limiting Data Points: Displaying only the most recent 50 data points to keep the chart performant.
- Memoization: Used useMemo to memoize filtered data, preventing unnecessary re-renders.
