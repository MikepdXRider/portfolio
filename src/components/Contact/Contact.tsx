import React from 'react';
import styles from './Contact.module.css';

interface ContactProps {
  imgSrc: string;
  imgAlt: string;
  linkHref: string;
  linkText: string;
  linkAriaLabel: string;
}

export default function Contact({
  imgSrc,
  imgAlt,
  linkHref,
  linkText,
  linkAriaLabel,
}: ContactProps) {
  return (
    <article className={styles.container}>
      <a href={linkHref} aria-label={linkAriaLabel} className={styles.link}>
        <img src={imgSrc} alt={imgAlt} className={styles.img} />
        {linkText}
      </a>
    </article>
  );
}
