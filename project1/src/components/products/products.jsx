import "./Products.css"
import { AiFillStar } from "react-icons/ai"
import { BsBag } from "react-icons/bs"

const Products = () => {
  return (
    <div className="products">
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg"
          alt="shoe"
        />

        <div className="card-body">
          <h4>Shoe</h4>

          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>

          <div className="price">
            <span className="old">$300</span>
            <span className="new">$30</span>
          </div>

          <button className="cart-btn">
            <BsBag />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
