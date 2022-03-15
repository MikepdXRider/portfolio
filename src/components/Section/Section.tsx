import React from 'react';

interface SectionProps {
  children: React.ReactChild;
  title?: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section>
      {title && <title>{title}</title>}

      {children}
    </section>
  );
}
