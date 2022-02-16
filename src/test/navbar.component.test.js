import { fireEvent, render, screen} from '@testing-library/react';
import Navbar from '../components/navbar/navbar';

describe('navbar component test', () => {
  it('test navbar home link works', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText('Home'));
  });
  it('test navbar Quote link works', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText('Quote'));
  });
  it('test navbar calculator link works', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText('Calculator'));
  });
});
