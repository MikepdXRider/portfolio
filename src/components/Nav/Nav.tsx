import React from 'react';

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
    <nav>
      {navData.map((linkData) => (
        <a href={linkData.href} aria-label={linkData.ariaLabel}>
          {linkData.textContent}
        </a>
      ))}
    </nav>
  );
}
