import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(Highcharts);

export default function SpiderChart(props) {
  const options = {
    chart: {
      polar: true,
      type: 'line'
    },
    title: {
      text: 'Percentiles of Pitches',
    },
    pane: {
      size: '80%'
    },
    xAxis: {
      categories: ['Cutter', 'Sinker', 'Change', 'Curve',
        'Fourseam', 'Slider'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      max: 100,
      labels: {
        formatter: function() {
          return this.value + '%';
        }
      }
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },
    series: [
      // {
      //   name: 'ACES',
      //   data: [54, 25, 21, 35, 17, 10],
      //   pointPlacement: 'on'
      // },
      {
        name: 'Whiffs',
        data: props.pitchMetrics.whiff
        // data: [50, 39, 42, 31, 26, 14],
        // pointPlacement: 'on'
      },
      // {
      //   name: 'CSW%',
      //   data: [20, 19, 62, 71, 96, 19],
      //   pointPlacement: 'on'
      // },
      // {
      //   name: 'GB+PU%',
      //   data: [22, 93, 33, 45, 78, 34],
      //   pointPlacement: 'on'
      // }
    ]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}