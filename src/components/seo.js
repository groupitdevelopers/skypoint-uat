import * as React from "react"
import PropTypes from "prop-types"

function Seo({ children }) {
  return (
    <>
      <meta name="google-site-verification" content="tVEOKsPlVKjH8tUdHrg1_2CR4MYIKednmYl6NWFBiCo" />
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)"></meta>
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
