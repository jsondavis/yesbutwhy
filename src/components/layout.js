import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const linkStyling = {
  boxShadow: `none`,
  color: `inherit`,
}

export const RootPathHeader = ({ title }) => {
  const h1Styling = {
    ...scale(1.5),
    marginBottom: rhythm(1.5),
    marginTop: 0,
  }

  return (
    <h1 style={h1Styling}>
      <Link style={linkStyling} to={"/"}>
        {title}
      </Link>
    </h1>
  )
}

export const OtherHeader = ({ title }) => {
  const h3Styling = {
    fontFamily: `Montserrat, sans-serif`,
    marginTop: 0,
  }

  return (
    <h3 style={h3Styling}>
      <Link style={linkStyling} to={`/`}>
        {title}
      </Link>
    </h3>
  )
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        {location.pathname === rootPath ? (
          <RootPathHeader title={title} />
        ) : (
          <OtherHeader title={title} />
        )}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
