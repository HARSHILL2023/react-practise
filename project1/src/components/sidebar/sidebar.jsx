import "./Sidebar.css"
import { BsMinecart } from "react-icons/bs"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <BsMinecart />
      </div>

      <div className="section">
        <h3>Category</h3>
        <button>puma</button>
        <button>vans</button>
      </div>

      <div className="section">
        <h3>Colors</h3>
        <button>Black</button>
        <button>White</button>
      </div>
    </aside>
  )
}

export default Sidebar
