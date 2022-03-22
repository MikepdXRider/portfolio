// testing
import { render, screen } from '@testing-library/react';
// components
import ConnectOption from './ConnectOption';

describe('ConnectOption component', () => {
  const mockContactProps = {
    imgSrc: 'https://placekitten.com',
    imgAlt: 'mock alt',
    linkHref: 'https://placecage.com',
    linkText: 'mock link text',
    linkAriaLabel: 'mock link aria-label',
  };

  it('matches the existing snapshot', () => {
    const { container } = render(<ConnectOption {...mockContactProps} />);

    expect(container).toMatchSnapshot();
  });

  it('matches the existing snapshot WITH download attribute', () => {
    const { container } = render(
      <ConnectOption {...mockContactProps} isDownload />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders component with all passed information', () => {
    render(<ConnectOption {...mockContactProps} />);

    // grabs elements from rendered dom.
    const imgEl = screen.getByRole('img', { name: /mock alt/i });
    const anchorEl = screen.getByLabelText(/mock link aria-label/i);

    //checks that elements are in dom and rendered with correct info.
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute('src', 'https://placekitten.com');
    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute('href', 'https://placecage.com');
  });

  it('renders component WITH a download attribute', () => {
    render(<ConnectOption {...mockContactProps} isDownload />);

    // grabs elements from rendered dom.
    const anchorEl = screen.getByLabelText(/mock link aria-label/i);

    //checks that the element is rendered to the dom correctly.
    expect(anchorEl).toHaveAttribute('download');
  });

  it('renders component WITHOUT a download attribute', () => {
    render(<ConnectOption {...mockContactProps} />);

    // grabs elements from rendered dom.
    const anchorEl = screen.getByLabelText(/mock link aria-label/i);

    //checks that the element is rendered to the dom correctly.
    expect(anchorEl).not.toHaveAttribute('download');
  });
});
