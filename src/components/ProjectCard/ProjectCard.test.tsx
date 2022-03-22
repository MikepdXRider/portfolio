// testing
import { render, screen } from '@testing-library/react';
// components
import ProjectCard from './ProjectCard';

describe('ProjectCard component', () => {
  const mockProject = {
    title: 'Mock-project-title',
    techStack: ['Mock-tech-one', 'Mock-tech-two', 'Mock-tech-three'],
    description: 'Mock project description',
    githubUrl: 'https://mock-github.com/',
    livesiteUrl: 'https://mock-livesite.com/',
  };

  it('matches the existing snapshot', () => {
    const { container } = render(<ProjectCard {...mockProject} />);

    expect(container).toMatchSnapshot();
  });

  it('renders component with all passed information', () => {
    render(<ProjectCard {...mockProject} />);

    // front of card
    // grabs relevant elements.
    const titleEl = screen.getByText(/mock-project-title/i);
    const techEl1 = screen.getByText(/mock-tech-one/i);
    const techEl2 = screen.getByText(/mock-tech-two/i);
    const techEl3 = screen.getByText(/mock-tech-three/i);
    // checks for elements on virtual dom.
    expect(titleEl).toBeInTheDocument();
    expect(techEl1).toBeInTheDocument();
    expect(techEl2).toBeInTheDocument();
    expect(techEl3).toBeInTheDocument();

    // back of card
    // grabs relevant elements.
    const descriptionEl = screen.getByText(/mock project description/i);
    // could use getByRole for links.
    const livesiteLinkEl = screen.getByLabelText(
      /mock-project-title livesite link/i
    );
    const githubLinkEl = screen.getByLabelText(
      /mock-project-title github link/i
    );
    // checks for elements on virtual dom.
    expect(descriptionEl).toBeInTheDocument();
    expect(livesiteLinkEl).toBeInTheDocument();
    expect(githubLinkEl).toBeInTheDocument();
    // checks that links have correct href attribute values.
    expect(livesiteLinkEl).toHaveAttribute(
      'href',
      'https://mock-livesite.com/'
    );
    expect(githubLinkEl).toHaveAttribute('href', 'https://mock-github.com/');
  });
});
