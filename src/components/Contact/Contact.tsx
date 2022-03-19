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
      <a href={linkHref} aria-label={linkAriaLabel}>
        <img src={imgSrc} alt={imgAlt} />
        {linkHref}
      </a>
    </article>
  );
}
