import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('contact component', () => {
  const mockContactProps = {
    imgSrc: 'https://placekitten.com',
    imgAlt: 'mock alt',
    linkHref: 'https://placecage.com',
    linkText: 'mock link text',
    linkAriaLabel: 'mock link aria-label',
  };

  it('matches the existing snapshot', () => {
    const { container } = render(<Contact {...mockContactProps} />);

    expect(container).toMatchSnapshot();
  });

  it('renders component with all passed information', () => {
    render(<Contact {...mockContactProps} />);

    // grabs elements from rendered dom.
    const imgEl = screen.getByRole('img', { name: /mock alt/i });
    const anchorEl = screen.getByLabelText(/mock link aria-label/i);

    //checks that elements are in dom and rendered with correct info.
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute('src', 'https://placekitten.com');
    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute('href', 'https://placecage.com');
  });
});
