import * as V from 'victory';
import { h, Component } from 'preact';

// TODO: Expose API similar to Highcharts, add functionality other than
//       VictoryLine :P

class VictoryComposite extends Component {
  render(props) {
    return (
      <V.VictoryChart>
        <V.VictoryLine {...props} />
      </V.VictoryChart>
    );
  }
}

VictoryComposite.propTypes = {
}

export default VictoryComposite;
