import React from 'react';
import styles from './section.module.css';

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
      className={`${darkMode ? styles.darkSection : styles.lightSection} ${
        styles.section
      }`}
    >
      {title && <h2 className={`${darkMode && styles.darkTitle}`}>{title}</h2>}

      {children}
    </section>
  );
}
