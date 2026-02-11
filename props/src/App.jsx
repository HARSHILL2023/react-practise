import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './components/props'
import { Cart } from './components/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Props name="kalu kaliya"/>

     <Cart />
    </>
  )
}

export default App
