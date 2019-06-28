import React from 'react';

export default function MetricTable(props) {
  let playerMetrics = props.playerMetrics;

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
            <td>{playerMetrics['ACES']['value'].toFixed(2)}</td>
            <td>{(playerMetrics['ACES']['percentile'] * 100).toFixed(0) + '%'}</td>
          </tr>
          <tr>
            <td>Whiffs%</td>
            <td>{playerMetrics['Whiffs']['value'].toFixed(2)}</td>
            <td>{(playerMetrics['Whiffs']['percentile'] * 100).toFixed(0) + '%'}</td>
          </tr>
          <tr>
            <td>CSW%</td>
            <td>{playerMetrics['CSW']['value'].toFixed(2)}</td>
            <td>{(playerMetrics['CSW']['percentile'] * 100).toFixed(0) + '%'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}