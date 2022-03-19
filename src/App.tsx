import React from 'react';
import './App.css';
import styles from './App.module.css';
import Section from './components/Section/Section';
import portrait from './assets/round-portrait.png';
import { skills } from './data/skills';
import SkillCard from './components/SkillCard/SkillCard';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard/ProjectCard';

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
            Software Engineer leveraging eight years of production and
            operations management experience to help teams overcome unique
            challenges, achieve project goals, and deploy market-ready features.
            I’m energized working in a fun, collaborative, and industrious
            environment to materialize collective goals.
          </p>
        </div>
      </Section>

      <Section title={'Skills'} darkMode={true}>
        <div className={styles.skillsContainer}>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill.title}>
                <SkillCard title={skill.title} content={skill.content} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title={'Projects'}>
        <div className={styles.skillsContainer}>
          <ul className={styles.skillsList}>
            {projects.map((project) => (
              <li key={project.title}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title={'Contact Me'} darkMode={true}>
        <div>Hello Contact me section!</div>
      </Section>
    </main>
  );
}

export default App;
