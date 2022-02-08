import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="screen">0</div>
        <div className="buttons">
          <div className="grid">
            <button className="btn" type="button">AC</button>
            <button className="btn" type="button">+/-</button>
            <button className="btn" type="button">%</button>
            <button className="btn btn-orange" type="button">/</button>
          </div>
          <div className="grid">
            <button className="btn" type="button">7</button>
            <button className="btn" type="button">8</button>
            <button className="btn" type="button">9</button>
            <button className="btn btn-orange" type="button">*</button>
          </div>
          <div className="grid">
            <button className="btn" type="button">4</button>
            <button className="btn" type="button">5</button>
            <button className="btn" type="button">6</button>
            <button className="btn btn-orange" type="button">-</button>
          </div>
          <div className="grid">
            <button className="btn" type="button">1</button>
            <button className="btn" type="button">2</button>
            <button className="btn" type="button">3</button>
            <button className="btn btn-orange" type="button">+</button>
          </div>
          <div className="grid">
            <button className="btn zero" type="button">0</button>
            <button className="btn" type="button">.</button>
            <button className="btn btn-orange" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
