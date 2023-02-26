import React from "react"
import "./index.css"
import { useState } from "react"

const Dropdown = ({ items }) => {
  const itemss = items

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue,setSelectedValue]=useState(null)

  // below function will set dropdown to be visible when we hover over select button
  const handleHover = () => {
    setShowDropdown(true)
  }

  // below function set the dropdown list to disappear on clicking yes or no from dropdown
  const handleClick = (item) => {
    setSelectedValue(item)
    setShowDropdown(false)
  }

  return (
    <div className="contain">
      <button className="btn" onMouseEnter={handleHover}>
        {selectedValue ? selectedValue : "Select"}
        <img
          src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
          alt=""
        />
      </button>
      {showDropdown && (
        <div className="drop">
          {itemss.map((item) => {
            return (
              <p key={item} onClick={() => handleClick(item)}>
                {item}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdown
