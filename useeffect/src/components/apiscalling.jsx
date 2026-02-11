import React, { useEffect, useState } from 'react'

const Apiscalling = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        async function bh() {
            let store = await fetch("https://jsonplaceholder.typicode.com/todos")
           
            let data = await store.json();

            if(data && data.length) setdata(data)
        }

            bh();
    },[])
  return (
    
    <>
    <div>
        <ul>
            {data.map((i,j)=>(
                <li key={j} >{i.title}</li>

            ))}
        </ul>
    </div>
    </>
  )
}

export default Apiscalling
