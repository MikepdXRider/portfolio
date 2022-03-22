import React from 'react';
import styles from './section.module.css';
import '../../App.css';

interface SectionProps {
  children: React.ReactChild;
  title?: string;
  darkMode?: boolean;
}

export default function Section({
  children,
  title,
  darkMode = false,
}: SectionProps) {
  return (
    <section
      aria-label={`${title} section`}
      className={`${
        darkMode ? styles.darkModeSection : styles.lightModeSection
      } ${title ? styles.sectionWithTitle : styles.section}`}
      id={title}
    >
      {title && (
        <article className={styles.titleContainer}>
          <h2
            className={`${
              darkMode ? styles.darkModeTitle : styles.lightModeTitle
            } ${styles.title}`}
          >
            {title}
          </h2>
        </article>
      )}

      {children}
    </section>
  );
}
