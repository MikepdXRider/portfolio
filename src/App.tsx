import React from 'react';
import './App.css';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Section title={'Hero'}>
        <p>Hello World!</p>
      </Section>
      <Section title={'Hero'} darkMode={true}>
        <p>Hello World!</p>
      </Section>
    </div>
  );
}

export default App;
