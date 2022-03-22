import React from 'react';
// styles
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
        <div className={styles.flipCardFront} aria-label="Project card front.">
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.techList}>
            {techStack.map((techItem) => (
              <li key={techItem} className={styles.techListItem}>
                {techItem}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.flipCardBack} aria-label="Project card back.">
          <p>{description}</p>
          <div className={styles.linkContainer}>
            <a
              className={styles.link}
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} github link. Opens a new tab.`}
            >
              Github
            </a>
            <a
              className={styles.link}
              href={livesiteUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} livesite link. Opens a new tab.`}
            >
              Livesite
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
