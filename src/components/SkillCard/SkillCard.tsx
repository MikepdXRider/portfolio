import React from 'react';
import type { Skill } from '../../interfaces/Skill';
import styles from './SkillCard.module.css';

export default function SkillCard({ title, content }: Skill) {
  return (
    <article className={styles.card}>
      <div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <ul className={styles.contentList}>
        {content.map((skill) => (
          <li key={skill} className={styles.contentListItem}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
