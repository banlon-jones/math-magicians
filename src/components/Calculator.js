import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const eventHandle = (e) => {
    const { next, total, operation } = calculate(state, e.target.value);
    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  return (
    <div>
      <div className="screen">
        {
          state.total ? (<div className="display">{state.total}</div>) : ''
          }
        <div className="display">{state.next}</div>
      </div>
      <div className="buttons">
        <div className="grid">
          <button className="btn" value="AC" onClick={eventHandle} type="button">AC</button>
          <button className="btn" value="+/-" onClick={eventHandle} type="button">+/-</button>
          <button className="btn" value="%" onClick={eventHandle} type="button">%</button>
          <button className="btn btn-orange" onClick={eventHandle} value="÷" type="button">÷</button>
          <button className="btn" value="7" onClick={eventHandle} type="button">7</button>
          <button className="btn" type="button" onClick={eventHandle} value="8">8</button>
          <button className="btn" value="9" onClick={eventHandle} type="button">9</button>
          <button className="btn btn-orange" onClick={eventHandle} value="x" type="button">x</button>
          <button className="btn" value="4" onClick={eventHandle} type="button">4</button>
          <button className="btn" value="5" onClick={eventHandle} type="button">5</button>
          <button className="btn" value="6" onClick={eventHandle} type="button">6</button>
          <button className="btn btn-orange" onClick={eventHandle} value="-" type="button">-</button>
          <button className="btn" value="1" onClick={eventHandle} type="button">1</button>
          <button className="btn" value="2" onClick={eventHandle} type="button">2</button>
          <button className="btn" value="3" onClick={eventHandle} type="button">3</button>
          <button className="btn btn-orange" onClick={eventHandle} value="+" type="button">+</button>
          <button className="btn zero" onClick={eventHandle} value="0" type="button">0</button>
          <button className="btn" onClick={eventHandle} value="." type="button">.</button>
          <button className="btn btn-orange" value="=" onClick={eventHandle} type="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
