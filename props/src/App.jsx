import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './components/props'
import { Cart } from './components/cart'
import Hello from './components/weather'
import { AiFillAlert } from "react-icons/ai";
import Suprise from './components/suprise'
import Component2 from './components/component2'
import Comp from './components/comp'
import Todolist from './components/todolist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todolist />

    </>
  )
}

export default App
