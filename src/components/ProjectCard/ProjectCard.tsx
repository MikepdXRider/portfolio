import React from 'react';

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
          <h2>{title}</h2>
          <ul>
            {techStack.map((techItem) => (
              <li key={techItem}>{techItem}</li>
            ))}
          </ul>
        </div>
        <div className={styles.flipCardBack}>
          <h3>{description}</h3>
          <a href={githubUrl}>Github</a>
          <a href={livesiteUrl}>Livesite</a>
        </div>
      </div>
    </article>
  );
}
