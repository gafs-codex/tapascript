import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const header = <h1>JSX is awesome</h1>
  const age = 21;
  const likes = ["Football ", "gaming ", "coding "];

  const likeEl = likes.map(like => <li key={like}>{like}</li>)

  return (
    <>
      {header}
      {age + " "}<br />
      {likeEl}
      {true ? <h3>I am Awesome</h3> : null}
    </>
  )
}

export default App
