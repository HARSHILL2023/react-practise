import React, { useState } from 'react'
import Head from './components/Header'
import Foot from './components/Footer'
import Main from './components/Main'
import Curly from './components/cutlrybarces'

const App = () => {

  const [count,setcount]=useState(0)
  
  return (
      <>
      <h1>{count}</h1>
      <button onClick={()=>{
        setcount(count+1)
      }}></button>
    <Head />
    <Main />
    <Foot />
    <Curly />
    </>
  )
}

export default App