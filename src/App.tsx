import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import portrait from './assets/round-portrait.png';

function App() {
  return (
    <main className="App">
      <Section darkMode={true}>
        {/* return container*/}
        <div>
          {/* text container */}
          <div>
            <h1>Michael X Rider</h1>
            <h3>Software Engineer</h3>
          </div>
          <img src={portrait} alt="Profile" />
        </div>
      </Section>
      <Section title={'About Me'}>
        <p>Hello About Me Section!</p>
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
