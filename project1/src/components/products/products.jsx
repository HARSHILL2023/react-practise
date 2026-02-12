import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from "react-icons/bs";
import './products.css'



const products = () => {
  return (
    <>

    <section className="class-container">
    
    <section className="card">
      <img className='' src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg" alt="" />
    
      <div className="card-details">
        
      <div className="cardtitle">
        <h3 className='card-title'>shoe</h3>
        <section className="card-review">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </section>
        <section className="card-price">
          <div className="price">
            <del>300$</del>
            <h3>30$</h3>
          </div>
          <div className="bag">
  <BsFillBagHeartFill />
          </div>
        </section>
      </div>

        </div>    
    </section>


    </section>

    </>
  )
}

export default products
