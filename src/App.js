
import './App.css';
import { UseStateCounter } from './Counter';
import { UseEffectDemo } from './UseEffectDemo';
import ThemeContext from './ThemeContext';
import React, { useState } from 'react';
import { useLocalStorage } from './LocalStorageHook';

function App() {

  const [theme, setTheme] = useState('light');
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div className="App">
      <header className="App-header">
        <h1>--Start Your App--</h1>

        <ThemeContext.Provider value={{ theme, setTheme }}>
          <UseStateCounter />
          <UseEffectDemo />
        </ThemeContext.Provider>

        <input type="text" value={name} 
          onChange={e => setName(e.target.value)} />        
      </header>
    </div>
  )
}

export default App;
