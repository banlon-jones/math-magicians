import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CalculatorPage from '../pages/calculator/calculator-page';

describe('home compnent rendered as expected', () => {
  it('home component rendered as expected', () => {
    render(
      <Router>
        <CalculatorPage />
      </Router>,
    );
    screen.getByText('Let do some Maths');
  });
});
