import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(Highcharts);

export default function SpiderChart(props) {
  const options = {
    chart: {
      polar: true,
      type: 'line',
      backgroundColor: null
    },
    title: {
      text: 'Metric by Pitch Type',
    },
    // colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
    //     '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    colors: ['#819ca9', '#29434e', '#1e88e5', '#6ab7ff', '#005cb2', '#546e7a'],
    pane: {
      size: '80%'
    },
    xAxis: {
      categories: ['Cutter', 'Sinker', 'Change', 'Curve',
        'Fourseam', 'Slider'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels: {
        // style: {
        //   color: '#E0E0E3'
        // }
      }
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      max: 100,
      labels: {
        formatter: function() {
          return this.value + '%';
        },
        // style: {
        //   color: '#E0E0E3'
        // }
      }
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },
    // legend: {
    //   itemStyle: {
    //     color: '#E0E0E3'
    //   }
    // },
    series: [
      {
        name: 'ACES',
        data: props.pitchMetrics.aces,
        // pointPlacement: 'on'
      },
      {
        name: 'Whiffs',
        data: props.pitchMetrics.whiff
        // data: [50, 39, 42, 31, 26, 14],
        // pointPlacement: 'on'
      },
      {
        name: 'CSW',
        data: props.pitchMetrics.csw
      //   data: [20, 19, 62, 71, 96, 19],
      //   pointPlacement: 'on'
      },
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