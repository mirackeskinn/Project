import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.tsx</code> dosyasını düzenleyin ve kaydedin, sayfa otomatik olarak yenilenecektir.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React'i Öğren
        </a>
      </header>
    </div>
  );
}

export default App;
