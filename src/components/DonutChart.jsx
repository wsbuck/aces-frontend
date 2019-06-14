import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function DonutChart(props) {
  let options = {
    chart: {
      type: 'pie',
      backgroundColor: null
    },
    title: {
      text: 'Percentage of Pitches Thrown'
    },
    colors: ['#adeee3', '#85ddcf', '#64baab', '#3c7269', '#28423d', '#162422'],
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
      // data: data
      data: props.pitchDist
    }]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}