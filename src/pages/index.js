import React from "react"
import Layout from "../components/layout"
import ThemePreview from "../images/spectrum-theme-preview.png"
import IconsPreview from "../images/spectrum-icons-preview.png"

const Home = () => {
  return (
    <Layout>
      <section
        id        = "hero"
        className = "max-w-lg mx-auto text-center my-32"
        role      = "banner"
      >
        <h1 className="text-4xl leading-none">
          Spectrum Theme
        </h1>
        <p className="py-10">
          Spectrum Theme is a suite of beautiful open-source dark theme and dark/light low contrast icon set for Visual Studio Code
        </p>
        <div className="flex flex-row items-center justify-center">
          <svg
            role      = "img"
            viewBox   = "0 0 24 24"
            xmlns     = "http://www.w3.org/2000/svg"
            width     = "25"
            className = "fill-current text-gray-100 mr-3"
          >
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
          </svg>
          <p className="text-gray-100 text-xl font-sans">
            Vs Code
          </p>
        </div>
      </section>
      <section
        id        = "theme"
        className = "lg:flex lg:flex-row-reverse items-center justify-between max-w-6xl mx-auto"
      >
        <div className="max-w-lg mx-auto text-justify lg:w-3/5">
          <h2 className="text-red-500 text-2xl mb-6">
            Color Theme
          </h2>
          <p className="mb-16">
            Spectrum theme is an elegant and juicy dark theme with awesomes colors for VS Code.
          </p>
          <div>
            <h3 className="uppercase text-sm text-gray-600">
              Clone with HTTPS
            </h3>
            <pre>
              <code>
                <span>$</span>
                git clone https://github.com/alexperronnet/spectrum-vscode-theme.git
              </code>
            </pre>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <a
              className = "bg-red-500 hover:bg-red-600 shadow-lg font-sans rounded-sm font-bold text-gray-800 uppercase text-sm py-2 px-4"
              href      = "https://marketplace.visualstudio.com/items?itemName=alexperronnet.spectrum-vscode-theme"
              target    = "_blank"
              rel       = "noopener noreferrer"
              title     = "VS Marketplace"
            >
              Marketplace
            </a>
            <a
              className = "bg-red-500 hover:bg-red-600 shadow-lg font-sans rounded-sm font-bold text-gray-800 uppercase text-sm py-2 px-4"
              href      = "https://github.com/alexperronnet/spectrum-vscode-theme"
              target    = "_blank"
              rel       = "noopener noreferrer"
              title     = "Repository"
            >
              Repository
            </a>
          </div>
        </div>
        <img
          src       = {ThemePreview}
          className = "lg:w-2/5 shadow-xl hidden lg:block"
          alt       = "Theme Preview"
        />
      </section>
      <section
        id        = "icons"
        className = "lg:flex lg:flex-row items-center justify-between max-w-6xl mx-auto mt-32"
      >
        <div className="max-w-lg mx-auto lg:w-3/5">
          <h2 className="text-yellow-500 text-2xl mb-6">
            Color Theme
          </h2>
          <p className="mb-16">
            Spectrum icons is an elegant and minimal light/dark low contrast file icon set for VS Code.
          </p>
          <div>
            <h3 className="uppercase text-sm text-gray-600">
              Clone with HTTPS
            </h3>
            <pre>
              <code>
                <span>$</span>
                git clone https://github.com/alexperronnet/spectrum-vscode-icons.git
              </code>
            </pre>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <a
              className = "bg-yellow-500 hover:bg-yellow-600 shadow-lg font-sans rounded-sm font-bold text-gray-800 uppercase text-sm py-2 px-4"
              href      = "https://marketplace.visualstudio.com/items?itemName=alexperronnet.spectrum-vscode-icons"
              target    = "_blank"
              rel       = "noopener noreferrer"
              title     = "VS Marketplace"
            >
              Marketplace
            </a>
            <a
              className = "bg-yellow-500 hover:bg-yellow-600 shadow-lg font-sans rounded-sm font-bold text-gray-800 uppercase text-sm py-2 px-4"
              href      = "https://github.com/alexperronnet/spectrum-vscode-icons"
              target    = "_blank"
              rel       = "noopener noreferrer"
              title     = "Repository"
            >
              Repository
            </a>
          </div>
        </div>
        <img
          src       = {IconsPreview}
          className = "lg:w-2/5 shadow-xl hidden lg:block"
          alt       = "Theme Preview"
        />
      </section>
    </Layout>
  )
}

export default Home
