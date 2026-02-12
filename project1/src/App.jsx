import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Products from './components/products/products'
import Recoms from './components/recoms/recoms'
import recoms from ''

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Products/>
    <Navbar />
    <Recoms />
    
    </>
  )
}

export default App
