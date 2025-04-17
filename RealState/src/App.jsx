import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routers, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline '>Hello World</h1>
    </>
  )
}

export default App
