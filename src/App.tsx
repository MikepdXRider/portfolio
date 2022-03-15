import React from 'react';
import './App.css';
import styles from './App.module.css';
import Section from './components/Section/Section';
import portrait from './assets/round-portrait.png';

function App() {
  return (
    <main>
      {/* hero section */}
      <Section darkMode={true}>
        <div className={styles.heroContainer}>
          <img src={portrait} alt="Profile" className={styles.img} />
          <div>
            <h1 className={styles.name}>Michael X Rider</h1>
            <h2 className={styles.title}>Software Engineer</h2>
          </div>
        </div>
      </Section>

      <Section title={'About Me'}>
        <div className={styles.aboutContainer}>
          <p className={styles.aboutText}>
            <b>Software Engineer</b> leveraging eight years of production and
            operations management experience to help teams overcome unique
            challenges, achieve project goals, and deploy market-ready
            applications. I’m energized working in a fun, collaborative, and
            industrious environment to materialize collective goals.
          </p>
        </div>
      </Section>

      <Section title={'Skills'} darkMode={true}>
        <p>Hello Skills Section!</p>
      </Section>

      <Section title={'Projects'}>
        <p>Hello Projects Section!</p>
      </Section>

      <Section title={'Contact Me'} darkMode={true}>
        <p>Hello Contact Me Section!</p>
      </Section>
    </main>
  );
}

export default App;
