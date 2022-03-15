import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('section component', () => {
  it('renders section component WITH a title and children', () => {
    render(
      <Section title={'test-title'}>
        <p>Hello World</p>
      </Section>
    );

    // Grabs elements from rendered DOM
    const titleEl = screen.getByText(/test-title/i);
    const childEl = screen.getByText(/hello world/i);

    // Checks that elements are in rendered DOM
    expect(titleEl).toBeInTheDocument();
    expect(childEl).toBeInTheDocument();
  });

  it('matches the existing snapshot WITH a title and children', () => {
    const { container } = render(
      <Section title={'test-title'}>
        <p>Hello World</p>
      </Section>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders section component WITHOUT a title and WITH children', () => {
    render(
      <Section>
        <p>Hello World</p>
      </Section>
    );

    // Grabs elements from rendered DOM
    const childEl = screen.getByText(/hello world/i);

    // Checks that elements are in rendered DOM
    expect(childEl).toBeInTheDocument();
  });

  it('matches the existing snapshot WITHOUT a title and WITH children', () => {
    const { container } = render(
      <Section>
        <p>Hello World</p>
      </Section>
    );

    expect(container).toMatchSnapshot();
  });
});
