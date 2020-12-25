import React from "react"
import { Link } from "gatsby"
import headerStyle from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <h1>
        <Link to={"/"} className={headerStyle.title}>
          Pretty Solution
        </Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              to={"/"}
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/blog/"}
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={"/contact/"}
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"/about/"}
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
