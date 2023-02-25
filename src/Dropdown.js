import React from "react"
import "./index.css"
import { useState } from "react"

const Dropdown = ({ items }) => {
  const itemss = items

  const [showDropdown, setShowDropdown] = useState(false)

  const handleHover = () => {
    setShowDropdown(true)
  }

  const handleLeave = () => {
    setShowDropdown(false)
  }

  return (
    <div>
      <button
        className="btn"
        onMouseEnter={handleHover}
        // onMouseLeave={handleLeave}
      >
        Select <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt=""/>
      </button>
      {showDropdown && (
        <div className="drop">
          {itemss.map((item) => {
            return <p key={item} onClick={handleLeave
            
            }>{item}</p>
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdown
