import React, { useState, useEffect } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// import { pitchData } from './tempData';

export default function DonutChart(props) {
  const [data, setData] = useState([
    {name: 'FA', y: 0.25},
    {name: 'CU', y: 0.75}
  ]);

  let options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Percentage of Pitches Thrown'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: -30,
          format: '<b>{point.name}</b>',
        },
        showInLegend: false,
      }
    },
    series: [{
      name: 'Pitch',
      innerSize: '50%',
      colorByPoint: true,
      data: data
    }]
  }

  useEffect(() => {
    updateData(props.pitchDist);
  }, [props.pitchDist]);

  function updateData(data) {
    setData(data);
  }

  return (
    <>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    </>
  );
}