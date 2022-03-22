// testing
import { render } from '@testing-library/react';
// components
import Nav from './Nav';

describe('Nav component', () => {
  const mockNavData = [
    {
      textContent: 'mock text content 1',
      href: 'mock href 1',
      ariaLabel: 'mock aria label 1',
    },
    {
      textContent: 'mock text content 2',
      href: 'mock href 2',
      ariaLabel: 'mock aria label 2',
    },
  ];

  it('matches the existing snapshot', () => {
    const { container } = render(<Nav navData={mockNavData} />);

    expect(container).toMatchSnapshot();
  });
});
