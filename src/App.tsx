import React from 'react';
// styles
import './App.css';
import styles from './App.module.css';
// components
import ConnectOption from './components/ConnectOption/ConnectOption';
import Section from './components/Section/Section';
import SkillCard from './components/SkillCard/SkillCard';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Nav from './components/Nav/Nav';
// assets
import portrait from './assets/round-portrait.png';
import gmail from './assets/email.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import resumepng from './assets/resume.png';
// data
import { skills } from './data/skills';
import { projects } from './data/projects';
import { nav } from './data/nav';

function App() {
  return (
    <main>
      <header>
        <Nav navData={nav} />
      </header>

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

      <Section title={'Connect'} darkMode={true}>
        <div className={styles.contactMeContainer}>
          <ConnectOption
            imgSrc={gmail}
            imgAlt="email icon"
            linkHref="mailto:mikepdxrider@gmail.com"
            linkText="MikepdXRider@gmail.com"
            linkAriaLabel="Opens Inbox or alternative email application"
          />
          <ConnectOption
            imgSrc={linkedin}
            imgAlt="linkedin icon"
            linkHref="https://linkedin.com/in/MikepdXRider"
            linkText="/MichaelpdXRider"
            linkAriaLabel="Opens linkedin profile page in new tab"
          />
          <ConnectOption
            imgSrc={github}
            imgAlt="github icon"
            linkHref="https://github.com/MikepdXRider"
            linkText="/MikepdXRider"
            linkAriaLabel="Opens github profile page in new tab"
          />
          <ConnectOption
            imgSrc={resumepng}
            imgAlt="resume icon"
            linkHref="Michael_Rider_Resume.pdf"
            linkText="Download Resume"
            linkAriaLabel="Downloads resume"
            isDownload
          />
        </div>
      </Section>
    </main>
  );
}

export default App;
