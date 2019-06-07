import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { pitchData } from './tempData';

const options = {
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
      // center: ['50%', '75%'],
      // startAngle: -90,
      //       endAngle: 90,
      //       center: ['50%', '75%'],
      //       size: '110%'
    }
  },
  series: [{
    name: 'Pitch',
    innerSize: '50%',
    colorByPoint: true,
    data: null
  }]
};

export default function DonutChart(props) {
  options.series[0].data = pitchData;
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}