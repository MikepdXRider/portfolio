import React from 'react';

interface sectionProps {
  children: React.ReactChild;
  title?: string;
}

export default function Section({ children, title }: sectionProps) {
  return (
    <section>
      {title && <title>{title}</title>}
      {children}
    </section>
  );
}
