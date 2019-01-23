import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dayRate: 0,
      hours: 0
    };
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: Number(e.target.value)
    });
  }

  render() {
    const rate = this.state.dayRate / this.state.hours;
    if (rate === NaN || rate === Infinity) {
    }

    return (
      <form>
        <NumberInput
          name="dayRate"
          handleChange={e => this.handleChange(e)}
          label="Day rate"
          min={0}
          max={5000}
        />
        <NumberInput
          name="hours"
          handleChange={e => this.handleChange(e)}
          label="Hours"
          min={1}
          max={12}
        />
        <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
      </form>
    );
  }
}
