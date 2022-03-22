import React from 'react';

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
    <article>
      <a href={linkHref} aria-label={linkAriaLabel}>
        <img src={imgSrc} alt={imgAlt} />
        {linkText}
      </a>
    </article>
  );
}
