import { render, screen } from '@testing-library/react';
import Homepage from '../pages/Homepage/homepage';

describe('home compnent rendered as expected', () => {
  it('home component rendered as expected', () => {
    render(<Homepage />);
    screen.getByText('Welcome to our Calculator website');
  });
  it('component rendered as expected', () => {
    render(<Homepage />);
    const text = 'is typically a portable electronic device used to perform calculations, ranging from basic arithmetic to complex mathematics. The first solid-state electronic calculator was created in the early 1960s. Pocket-sized devices became available in the 1970s, especially after the Intel 4004, the first microprocessor, was developed by Intel for the Japanese calculator company Busicom. They later became used commonly within the petroleum industry (oil and gas).';
    screen.getByText(text);
  });
});
