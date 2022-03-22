import React from 'react';
// styles
import styles from './ConnectOption.module.css';

interface ConnectOptionProps {
  imgSrc: string;
  imgAlt: string;
  linkHref: string;
  linkText: string;
  linkAriaLabel: string;
  isDownload?: boolean;
}

export default function ConnectOption({
  imgSrc,
  imgAlt,
  linkHref,
  linkText,
  linkAriaLabel,
  isDownload = false,
}: ConnectOptionProps) {
  return (
    <article>
      <a
        href={linkHref}
        aria-label={linkAriaLabel}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
        download={isDownload}
      >
        <img src={imgSrc} alt={imgAlt} className={styles.img} />
        {linkText}
      </a>
    </article>
  );
}
