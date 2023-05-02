import * as React from "react"
import PropTypes from "prop-types"

function Seo({ children }) {
  return (
    <>
      <meta name="color-scheme" content="dark"></meta>
      <meta name="google-site-verification" content="tVEOKsPlVKjH8tUdHrg1_2CR4MYIKednmYl6NWFBiCo" />
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)"></meta>
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"></meta>
      <meta name="msapplication-navbutton-color" content="#000000"></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" media="(prefers-color-scheme: dark)"></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" media="(prefers-color-scheme: light)"></meta>
      {children}
    </>
  )
}

Seo.defaultProps = {
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string
}

export default Seo
