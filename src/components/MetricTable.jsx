import React, { useState, useEffect } from 'react';

export default function MetricTable(props) {
  return (
    <div className="metric-table-container">
      <table className="metric-table">
        <tbody>
          <tr>
            <th>Metric</th>
            <th>Value</th>
            <th>Percentile</th>
          </tr>
          <tr>
            <td>ACES</td>
            <td>85%</td>
            <td>55%</td>
          </tr>
          <tr>
            <td>Whiffs%</td>
            <td>85%</td>
            <td>55%</td>
          </tr>
          <tr>
            <td>CSW%</td>
            <td>85%</td>
            <td>55%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}