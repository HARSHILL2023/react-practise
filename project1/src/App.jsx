import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Products from './components/products/products'
import Recoms from './components/recoms/recoms'
import Sidebar from './components/sidebar/sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar />
    <Recoms />  
    <Sidebar />
    <div className="main-content">
        <Products />
      </div>
    
    
    
    </>
  )
}

export default App
