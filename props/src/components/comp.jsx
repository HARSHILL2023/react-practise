import React from 'react'

const Comp = ({count,onclickhandler}) => {
  return (
    <div>
        <h1>{count}</h1>
    <button onClick={onclickhandler}>click me</button>
    </div>
  )
}

export default Comp