import React from "react"
import Metas from "./metas"
import Footer from "./footer"
import Alert from "./alert"
import "../styles/index.scss"
import "typeface-roboto"
import "typeface-roboto-mono"

const Layout = ({children}) => {
  return (
    <div className="wrapper">
      <Metas />
      <Alert />
      <main role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
