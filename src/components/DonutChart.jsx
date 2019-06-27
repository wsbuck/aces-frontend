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
      text: 'Pitch Distribution'
    },
    // colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
    // '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    colors: ['#819ca9', '#29434e', '#1e88e5', '#6ab7ff', '#005cb2', '#546e7a'],
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