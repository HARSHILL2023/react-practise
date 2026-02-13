import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apiscalling from './components/apiscalling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Apiscalling />
      
    </>
  )
}

export default App
