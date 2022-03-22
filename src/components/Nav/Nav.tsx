import React from 'react';
import styles from './Nav.module.css';

interface NavDataItem {
  textContent: string;
  href: string;
  ariaLabel: string;
}

interface NavProps {
  navData: NavDataItem[];
}

export default function Nav({ navData }: NavProps) {
  return (
    <nav className={styles.nav}>
      {navData.map((linkData) => (
        <a
          className={styles.link}
          href={linkData.href}
          aria-label={linkData.ariaLabel}
        >
          {linkData.textContent}
        </a>
      ))}
    </nav>
  );
}
