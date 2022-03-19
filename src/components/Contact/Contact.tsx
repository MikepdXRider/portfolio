import React from 'react';

interface ContactProps {
  src: string;
  alt: string;
  href: string;
  ariaLabel: string;
}

export default function Contact({ src, alt, href, ariaLabel }: ContactProps) {
  return (
    <article>
      <img src={src} alt={alt} />
      <a href={href} aria-label={ariaLabel}>
        {href}
      </a>
    </article>
  );
}
