import { h, render } from "preact";

import VictoryLineChart from "./components/victory-line-chart.jsx";

export default class VictoryStandalone {
  constructor(dom, props) {
    render(<VictoryLineChart {...props} />, dom);
  }
}
