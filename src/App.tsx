import './App.scss'
import React from 'react';
import { Avatar, Title } from './Components'


function App() {
  return (
    <div className="App">
      <aside className="App__sidebar"></aside>
      <div className="App__content">
        <header className="App__header">
          <Avatar />
          <Title />
        </header>
        <section className="App__body"></section>
      </div>
    </div>
  )
}

export default App
