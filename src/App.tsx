import './index.scss'
import React from 'react';
import {
  Avatar, 
  Contact,
  Summary, 
  Title
} from './Components'


function App() {
  return (
    <div className="App">
      <aside className="App__sidebar"></aside>
      <div className="App__content">
        <header className="App__header">
          <Avatar />
          <Title />
          <Contact />
        </header>
        <section className="App__body">
          <Summary />
        </section>
      </div>
    </div>
  )
}

export default App
