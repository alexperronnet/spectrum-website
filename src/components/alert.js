import React from "react"

const Alert = () => {
  return (
    <div id="alert" role="alert">
      <a
        className = "text-gray-300 hover:text-gray-100 hover:underline"
        href      = "https://eji.org"
        target    = "_blank"
        rel       = "noopener noreferrer"
        title     = "Support the Equal Justice Initiative"
      >
        Support the Equal Justice Initiative
      </a>
    </div>
  )
}

export default Alert
