import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../pages/quote/quote';

describe('Quote component rendered as expected', () => {
  it('render quote heading', () => {
    render(
      <Router>
        <Quote />
      </Router>,
    );
    screen.getByText('Todays random Quote');
  });
});
