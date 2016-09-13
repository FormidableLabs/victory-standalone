import { h, render } from 'preact';
import VictoryComposite from 'victory-composite';

export default class Victory {
  constructor(dom, props) {
    render(<VictoryComposite {...props} />, dom);
  }
}
