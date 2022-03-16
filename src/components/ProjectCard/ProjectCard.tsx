import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  techStack: string[];
  description: string;
  githubUrl: string;
  livesiteUrl: string;
}

export default function ProjectCard({
  title,
  techStack,
  description,
  githubUrl,
  livesiteUrl,
}: ProjectCardProps) {
  return (
    <article className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h2 className={styles.title}>{title}</h2>
          <ul>
            {techStack.map((techItem) => (
              <li key={techItem} className={styles.techListItem}>
                {techItem}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.flipCardBack}>
          <h3>{description}</h3>
          <div className={styles.linkContainer}>
            <a className={styles.link} href={githubUrl}>
              Github
            </a>
            <a className={styles.link} href={livesiteUrl}>
              Livesite
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
