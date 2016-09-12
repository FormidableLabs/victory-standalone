/** @jsx React.createElement */
import React from "react";
import { range } from "lodash";
import * as V from "victory";

// eslint-disable-next-line no-magic-numbers
const DATA = range(-10, 10, 0.1);

const VictoryLineChart = () => {
  return (
    <V.VictoryChart>
      <V.VictoryLine
        data={DATA}
        y={(x) => 2 * x}
      />
    </V.VictoryChart>
  );
};

export default VictoryLineChart;
