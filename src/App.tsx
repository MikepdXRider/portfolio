import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Section title={'Test'}>
        <p>Hello World!</p>
      </Section>
      <Section title={'Test'} darkMode={true}>
        <p>Hello World!</p>
      </Section>
    </div>
  );
}

export default App;
