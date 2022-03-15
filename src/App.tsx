import React from 'react';
import './App.css';
import Section from './components/Section/Section';

function App() {
  return (
    <main className="App">
      <Section title={'Hero'} darkMode={true}>
        <p>Hello Hero Section!</p>
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
