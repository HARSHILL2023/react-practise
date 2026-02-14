import React from 'react'
import Button from './compoennets/button'
const App = () => {
  return (
   <div>

  <Button onClick={()=> console.log('clickedd') disabled={true}} label='click'   />
   </div>
  )
  }
export default App
