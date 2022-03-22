// testing
import { render, screen } from '@testing-library/react';
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

  it('renders component with all passed information', () => {
    render(<Nav navData={mockNavData} />);

    // grabs elements from rendered dom.
    const linkEl1 = screen.getByLabelText(/mock aria label 1/i);
    const linkEl2 = screen.getByLabelText(/mock aria label 2/i);

    //checks that elements are in dom and rendered with correct info.
    expect(linkEl1).toBeInTheDocument();
    expect(linkEl1).toHaveAttribute('href', 'mock href 1');
    expect(linkEl1.textContent).toEqual('mock text content 1');
    expect(linkEl2).toBeInTheDocument();
    expect(linkEl2).toHaveAttribute('href', 'mock href 2');
    expect(linkEl2.textContent).toEqual('mock text content 2');
  });
});
