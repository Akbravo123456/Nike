import React from 'react'
import { FlexContent, Hero,Sales, Stories } from './components';
import { heroapi,popularsales,toprateslaes,highlight,sneaker, story} from './data/data.js';

const App = () => {
  return (
    <div>
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <FlexContent endpoint={highlight}/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
    </main>
    </div>
  )
}

export default App
