// testing
import { render, screen } from '@testing-library/react';
// components
import SkillCard from './SkillCard';

describe('SkillCard component', () => {
  // declares mocks
  const mockSkillTitle = 'test-skill-title';
  const mockSkillContent = [
    'test-skill-one',
    'test-skill-two',
    'test-skill-three',
  ];

  it('renders skillcard', () => {
    render(<SkillCard title={mockSkillTitle} content={mockSkillContent} />);

    // Grabs elements from rendered DOM
    const titleEl = screen.getByText(mockSkillTitle);
    const skillEls = mockSkillContent.map((mockSkill) =>
      screen.getByText(mockSkill)
    );

    // Checks that elements are in rendered DOM
    expect(titleEl).toBeInTheDocument();
    skillEls.map((skillEl) => expect(skillEl).toBeInTheDocument());
  });

  it('matches the existing snapshot', () => {
    const { container } = render(
      <SkillCard title={mockSkillTitle} content={mockSkillContent} />
    );

    expect(container).toMatchSnapshot();
  });
});
