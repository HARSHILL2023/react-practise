import React, { use, useState } from 'react'

const Todolist = () => {
    const [name,setname]=useState("");
    const [array,setarray]=useState([]);

    function changed (e){
        e.preventDefault()
        setarray([...array,name]);
        setname("");
    }
    const clear=() =>{
        setarray([])
    }
  return (
    <>
    <form onSubmit={changed} >
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
    <button type="submit">addd</button>
    <button onClick={clear}>clear</button>
    </form>
    <ul>
        {array.map((value,index)=>(<li key={index}>{value}</li>))}
    </ul>
    </>
  )
}

export default Todolist