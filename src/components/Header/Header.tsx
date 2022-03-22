import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <a href="# " aria-label="Scrolls user to top of page">
          Home
        </a>
        <a href="#About Me" aria-label="Scrolls user to About Me section">
          About
        </a>
        <a href="#Skills" aria-label="Scrolls user to Sills section">
          Skills
        </a>
        <a href="#Projects" aria-label="Scrolls user to Projects section">
          Projects
        </a>
        <a href="#Connect" aria-label="Scrolls user to Connect section">
          Connect
        </a>
      </nav>
    </header>
  );
}
