import React, { useState, useEffect } from 'react';

import DonutChart from './DonutChart';
import SpiderChart from './SpiderChart';

export default function ChartResults(props) {
  const [pitchDist, setPitchDist] = useState([
    { y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }
  ]);
  const [pitchMetrics, setPitchMetrics] = useState(
    {
      whiff: [0, 0, 0, 0, 0, 0],
      csw: [0, 0, 0, 0, 0, 0],
      aces: [0, 0, 0, 0, 0, 0]
    }
  );

  useEffect(() => {
    // console.log('chart results effect');
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
        let whiffMetric = [];
        let cswMetric = [];
        let acesMetric = [];
        for (let pitchType of Object.keys(data)) {
          if (pitchType !== 'pitcherId'
            && pitchType !== 'pitcherName'
            && pitchType !== 'All') {
            let dist = data[pitchType].Num
            let whiff = data[pitchType]['Whiffs%Rank'];
            let csw = data[pitchType]['CSWRank'];
            let aces = data[pitchType]['ACES'];
            whiff = whiff > 0 ? whiff : 0;
            csw = csw > 0 ? csw : 0;
            aces = aces > 0 ? aces : 0;
            let name;
            if (dist === 0) {
              name = "";
              whiff = 0;
              csw = 0;
            } else {
              name = pitchType;
            }
            pitchDistArray.push({ name: name, y: Number(dist) });
            whiffMetric.push(whiff);
            cswMetric.push(csw);
            acesMetric.push(aces);
          } else if (pitchType === 'All') {
            // console.log(data[pitchType]);
            props.setPlayerMetrics({
              Whiffs: {value: data[pitchType]['Whiffs'], percentile: data[pitchType]['Whiffs%Rank']},
              CSW: {value: data[pitchType]['CSW'], percentile: data[pitchType]['CSWRank']},
              ACES: {value: data[pitchType]['ACES_Value'], percentile: data[pitchType]['ACES']}
            });
          }
        }
        setPitchDist(pitchDistArray);
        whiffMetric = props.metrics.includes('Whiffs')
          ? whiffMetric.map(x => x * 100) : [0, 0, 0, 0, 0, 0];
        cswMetric = props.metrics.includes('CSW')
          ? cswMetric.map(x => x * 100) : [0, 0, 0, 0, 0, 0];
        acesMetric = props.metrics.includes('ACES')
          ? acesMetric.map(x => x * 100) : [0, 0, 0, 0, 0, 0];
        setPitchMetrics({
          whiff: whiffMetric,
          csw: cswMetric,
          aces: acesMetric,
        });
      })
      .catch(err => console.log(err));
  }, [props.playerId, props.metrics, props.setPlayerMetrics]); // eslint-disable-line 

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