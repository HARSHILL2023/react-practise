import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './components/props'
import { Cart } from './components/cart'
import Hello from './components/weather'
import { AiFillAlert } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Props name="kalu kaliya"/>

     <Cart />
     <Hello temp={-12}/>
     <AiFillAlert />
    </>
  )
}

export default App
