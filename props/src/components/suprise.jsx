import React, { useState } from 'react'

const Suprise = () => {
    const [frnd,setfrnd]=useState(["harshil","harhihil"]);
    const update = () =>{
        setfrnd(frnd.map((e)=>(e==="harshil"?"badlay gayu":e)))
    }

  return (
    <>
    
   <h1>{frnd}</h1>
  <button onClick={update}></button>

    </>
  )
}

export default Suprise