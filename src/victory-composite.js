import * as V from 'victory';
import { h, Component } from 'preact';
import { PropTypes } from 'preact-compat';

class VictoryComposite extends Component {
  constructor(props) {
    super(props)
  }

  render(props) {
    return (
      <V.VictoryChart>
        <V.VictoryLine {...props} />
      </V.VictoryChart>
    );
  }
}

VictoryComposite.propTypes = {
  foo: PropTypes.string.isRequired
}

export default VictoryComposite;
