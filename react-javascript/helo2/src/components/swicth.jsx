import { useState } from "react"

const Swwitch = () => {
  const [sw, setsw] = useState(false)
  return <>
    {sw ? <h1>light</h1> : <h1>Dark</h1>}

    <button onClick={() =>  setsw((s) => !s) }>change</button>



  </>
}
export default Swwitch 