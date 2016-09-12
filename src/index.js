import { h, render, Component } from 'preact';
import { range } from 'lodash';
import LineChart from 'react-compat';

// const LineChart = () => (
//   <V.VictoryChart>
//     <V.VictoryLine
//       data={range(-10, 10, 0.1)}
//       y={(x) => 2*x}
//       />
//   </V.VictoryChart>
// )

export default class VictoryStandalone {
  constructor(dom, props) {
    render(
      <LineChart {...props} />,
      dom
    )
  }
}
