import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../redux/counter'
const Counter = () => {
    //read the  data from store

   const data = useSelector((state)=>state.counting.value)

   //changing the data 

   const dispatch=useDispatch()


  return (
    <>
     {data} 
    </>
  )
}

export default Counter
