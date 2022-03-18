import { render } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard component', () => {
  const mockProject = {
    title: 'Mock-project-title',
    techStack: ['Mock-tech-one', 'Mock-tech-two', 'Mock-tech-three'],
    description: 'Mock project description',
    githubUrl: 'https://placekitten.com/',
    livesiteUrl: 'https://placekitten.com/',
  };

  it('matches the existing snapshot', () => {
    const { container } = render(<ProjectCard {...mockProject} />);

    expect(container).toMatchSnapshot();
  });
});
