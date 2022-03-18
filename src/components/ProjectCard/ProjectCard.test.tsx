import { getByRole, render, screen } from '@testing-library/react';
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
    screen.getByText(/mock-project-title/i);
    screen.getByText(/mock-tech-one/i);
    screen.getByText(/mock-tech-two/i);
    screen.getByText(/mock-tech-three/i);

    // back of card
    screen.getByText(/mock project description/i);
    screen.getByLabelText(/mock-project-title livesite link/i);
    screen.getByLabelText(/mock-project-title github link/i);
  });
});
