import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    debugger
    if (user) return;
    axios('/users').then((response) => {
      debugger;
      setUser(response.data);
    }).catch((err) => {
      console.log(err);
      debugger;
    })
  }, [user]);

  // useEffect(() => {
  //   console.log('test');
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br />
          node server from localhost:4001...< br />
          { user }<br />
          I need to commit my brain!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This should be a new seamless deploy!<br />
          I do Need test Replicas and see if Rolling updates actually work! WooHoo!!!
          Before the containers and services restart...
          showing new changes!!!
        </a>
      </header>
    </div>
  );
}

export default App;
