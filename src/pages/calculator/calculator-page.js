import React from 'react';
import Calculator from '../../components/Calculator';
import Navbar from '../../components/navbar/navbar';
import './calculator-page.css';

function CalculatorPage() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid flex-d">
        <div>
          <h1> Let do some Maths  </h1>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
