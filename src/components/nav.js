import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="p-5">
      <Link
        to="/"
        className="mr-3"
        activeStyle={{ textDecoration: "underline" }}
      >
        Index
      </Link>
      <Link
        to="/about"
        className="mr-3"
        activeStyle={{ textDecoration: "underline" }}
      >
        About
      </Link>
      <Link
        to="/blog"
        className="mr-3"
        activeStyle={{ textDecoration: "underline" }}
      >
        Blog
      </Link>
    </nav>
  )
}

export default Nav
