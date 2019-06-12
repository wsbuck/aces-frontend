import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function DonutChart(props) {
  // const [data, setData] = useState([
  //   {y: 1},
  //   {y: 1},
  //   {y: 1},
  //   {y: 1},
  //   {y: 1},
  //   {y: 1},
  //   {y: 1}
  // ]);

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
      // data: data
      data: props.pitchDist
    }]
  }

  // useEffect(() => {
  //   updateData(props.pitchDist);
  // }, [props.pitchDist]);

  // function updateData(data) {
  //   setData(data);
  // }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}