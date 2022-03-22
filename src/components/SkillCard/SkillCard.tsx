import React from 'react';
// styles
import styles from './SkillCard.module.css';

interface SkillCardProps {
  title: string;
  content: string[];
}

export default function SkillCard({ title, content }: SkillCardProps) {
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
