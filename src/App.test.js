import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component test', () => {
  test('render welcome message', () => {
    render(<App />);
    screen.getByText('Welcome to our Calculator website');
  });
  it('Switch to Calculator page and run check ', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    screen.getByText('Let do some Maths');
  });
  it('Switch to qoute page and run check', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Quote'));
    screen.getByText('Todays random Quote');
  });
});
