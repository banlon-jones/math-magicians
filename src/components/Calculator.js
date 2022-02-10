import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.eventHandle = this.eventHandle.bind(this);
  }

  eventHandle = (e) => {
    const { next, total, operation } = calculate(this.state, e.target.value);
    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="container">
        <div className="screen">
          {
          total ? (<div className="display">{total}</div>) : '0'
          }
          <div className="display">{next}</div>
        </div>
        <div className="buttons">
          <div className="grid">
            <button className="btn" value="AC" onClick={this.eventHandle} type="button">AC</button>
            <button className="btn" value="+/-" onClick={this.eventHandle} type="button">+/-</button>
            <button className="btn" value="%" onClick={this.eventHandle} type="button">%</button>
            <button className="btn btn-orange" onClick={this.eventHandle} value="÷" type="button">÷</button>
            <button className="btn" value="7" onClick={this.eventHandle} type="button">7</button>
            <button className="btn" type="button" onClick={this.eventHandle} value="8">8</button>
            <button className="btn" value="9" onClick={this.eventHandle} type="button">9</button>
            <button className="btn btn-orange" onClick={this.eventHandle} value="x" type="button">x</button>
            <button className="btn" value="4" onClick={this.eventHandle} type="button">4</button>
            <button className="btn" value="5" onClick={this.eventHandle} type="button">5</button>
            <button className="btn" value="6" onClick={this.eventHandle} type="button">6</button>
            <button className="btn btn-orange" onClick={this.eventHandle} value="-" type="button">-</button>
            <button className="btn" value="1" onClick={this.eventHandle} type="button">1</button>
            <button className="btn" value="2" onClick={this.eventHandle} type="button">2</button>
            <button className="btn" value="3" onClick={this.eventHandle} type="button">3</button>
            <button className="btn btn-orange" onClick={this.eventHandle} value="+" type="button">+</button>
            <button className="btn zero" onClick={this.eventHandle} value="0" type="button">0</button>
            <button className="btn" onClick={this.eventHandle} value="." type="button">.</button>
            <button className="btn btn-orange" value="=" onClick={this.eventHandle} type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
