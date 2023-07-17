import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // 숫자로만 구성된 dataPointValues를 만들어줌 max사용가능
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
