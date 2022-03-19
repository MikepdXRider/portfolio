import React from 'react';

interface ContactProps {
  imgSrc: string;
  imgAlt: string;
  linkHref: string;
  linkAriaLabel: string;
}

export default function Contact({
  imgSrc,
  imgAlt,
  linkHref,
  linkAriaLabel,
}: ContactProps) {
  return (
    <article>
      <img src={imgSrc} alt={imgAlt} />
      <a href={linkHref} aria-label={linkAriaLabel}>
        {linkHref}
      </a>
    </article>
  );
}
