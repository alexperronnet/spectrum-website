import React from "react"

const Footer = () => {
  return (
    <footer
      className = "bg-gray-900 py-6 text-xs text-center mt-16"
      role      = "contentinfo"
    >
      <div className="mx-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div>
            Made by <URL title="alexperronnet" href="https://alexperronnet.io" target="_self" />
          </div>
          <div className="mt-2 sm:m-0">
            Open-sourced on <URL title="Github" href="https://github.com/alexperronnet/spectrum-website" target="_blank" />
          </div>
        </div>
      </div>
    </footer>
  )
}

const URL = ({title, href}) => (
  <a
    className = "text-gray-300 hover:text-gray-100 hover:underline"
    href      = {href}
    target    = "_blank"
    rel       = "noopener noreferrer"
    title     = {title}
  >
    {title}
  </a>
)

export default Footer
