import React from 'react';

import DonutChart from './DonutChart';
import SpiderChart from './SpiderChart';

export default function ChartResults(props) {
  return (
    <div className="charts-container">
      <div className='chart-item'>
        <DonutChart />
      </div>
      <div className="chart-item">
        <SpiderChart />
      </div>
    </div>
  );
}