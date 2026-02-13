import { useEffect } from "react";
import { useState } from "react";

const learn = () =>{
    const [value ,setvalue]=useState(0)

    useEffect(()=>{
            console.log("use effect hase been called");

    },)

    return <>
    <h1>{value}</h1>
    <button onClick={()=>setvalue(value+1)}>click me</button>
    
    </>
    
}
export default learn
