import React, { useState, useEffect } from 'react';

import DonutChart from './DonutChart';
// import DonutChart2 from './DonutChart2';
import SpiderChart from './SpiderChart';

export default function ChartResults(props) {
  const [pitchDist, setPitchDist] = useState([]);
  const [pitchMetrics, setPitchMetrics] = useState({});

  useEffect(() => {
    console.log('chart results effect');
    const playerId = props.playerId;
    const endpoint = `https://ks506u80el.execute-api.us-west-2.amazonaws.com/dev/pitcher/${playerId}`;
    let lookupOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch(endpoint, lookupOptions)
      .then(result => result.json())
      .then(data => {
        // console.log(data);
        const pitchDistArray = [];
        const whiffMetric = [];
        for (let pitchType of Object.keys(data)) {
          if (pitchType !== 'pitcherId' 
            && pitchType !== 'pitcherName'
            && pitchType !== 'All') {
            // let dist = (data[pitchType].Num /  data['ALL'].Num);
            let dist = data[pitchType].Num
            let whiff = data[pitchType]['Whiffs%Rank'];
            let name;
            if (dist === 0) {
              name = "";
              whiff = 0;
            } else {
              name = pitchType;
            }
            pitchDistArray.push({ name: name, y: Number(dist) });
            whiffMetric.push(whiff);
          }
        }
        // console.log(pitchDistArray);
        setPitchDist(pitchDistArray);
        setPitchMetrics({ whiff: whiffMetric.map(x => x * 100) });
      })
      // .then(data => loadData(data))
      .catch(err => console.log(err));
  }, [props.playerId]);

return (
  <div className="charts-container">
    <div className='chart-item'>
      <DonutChart 
        playerId={props.playerId}
        pitchDist={pitchDist}
      />
    </div>
    <div className="chart-item">
      <SpiderChart 
        playerId={props.playerId} 
        pitchMetrics={pitchMetrics}
      />
    </div>
  </div>
);
}