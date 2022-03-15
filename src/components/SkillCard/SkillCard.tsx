import React from 'react';
import { Skill } from '../../interfaces/Skill';

export default function SkillCard({ title, content }: Skill) {
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {content.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
