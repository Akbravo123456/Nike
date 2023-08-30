import React from 'react'
import { Hero } from './components';
import { heroapi } from './data/data.js';

const App = () => {
  return (
    <div>
    <main>
      <Hero heroapi={heroapi}/>
    </main>
    </div>
  )
}

export default App
