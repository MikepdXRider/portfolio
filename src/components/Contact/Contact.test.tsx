import { render } from '@testing-library/react';
import Contact from './Contact';

describe('contact component', () => {
  const mockContactProps = {
    imgSrc: 'https://placekitten.com',
    imgAlt: 'mock alt',
    linkHref: 'https://placecage.com',
    linkAriaLabel: 'mock link aria-label ',
  };

  it('matches the existing snapshot', () => {
    const { container } = render(<Contact {...mockContactProps} />);

    expect(container).toMatchSnapshot();
  });
});
