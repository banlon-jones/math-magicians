import { render, screen } from '@testing-library/react';
import Quote from '../pages/quote/quote';

describe('Quote component rendered as expected', () => {
  it('render quote heading', () => {
    render(<Quote />);
    screen.getByText('Todays random Quote');
  });
});
