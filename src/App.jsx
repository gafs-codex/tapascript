import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import pets from './pet'
// import './App.css'
import './style.css'

function App() {
  const header = <h1>JSX is awesome</h1>
  const age = 21;
  const likes = ["Football ", "gaming ", "coding "];
  const myPet = pets.map((pets, index) => {
    return <li className='card' key={index}>
      <h1>{pets.name}</h1>
      <p>{pets.description}</p>
      <img
        className='pet-image'
        src={pets.image}
        alt={pets.name}
        width="200px"
        height="200px"
      />
      <ul className='mini-list'>
        {pets.skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </li>
  })
  // const likeEl = likes.map(like => <li key={like}>{like}</li>)

  return (
    <>

    </>
  )
}

export default App
