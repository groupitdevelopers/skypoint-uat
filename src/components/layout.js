import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import SubscribeForm from "./subscribe"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main className="bodyWrapper">
        {children}
        <Footer />
      </main>
      <SubscribeForm />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
