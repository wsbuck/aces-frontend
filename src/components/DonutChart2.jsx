import React, { Component } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export class DonutChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
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
          data: null
          // data: [
          //   {name: 'FA', y: 0.419433},
          //   {name: 'FC', y: 0.5806}
          // ]
        }]
      }
    }
  }

  render() {
    let { options } = this.state;
    console.log(options);
    // let { pitchDist } = this.props;
    // let data = this.props.pitchDist;
    // let data = [
    //   {name: 'FA', y: 0.419433939392828},
    //   {name: 'FC', y: 0.580609384092929}
    // ];
    // options.series[0].data = this.props.pitchDist;
    // options.series[0].data = data;

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    )
  }
}

export default DonutChart2;