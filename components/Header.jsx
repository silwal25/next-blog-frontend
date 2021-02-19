import Link from "next/link"
import Axios from "axios"
import { useState, useEffect, useContext } from "react"
import Head from "next/head"
import SearchOverlay from "../components/SearchOverlay"
import DispatchContext from "./DispatchContext"
import StateContext from "./StateContext"

const Header = () => {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <Link href="/">Food Blog</Link>
          </div>
          <nav className="navigation">
            <ul className="navigation__nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/categories/dessert">categories</Link>
              </li>
              <li>
                <Link href="/">contact</Link>
              </li>
              <li>
                <Link href="/">about</Link>
              </li>
            </ul>
          </nav>
          <i class="fas fa-search" onClick={() => appDispatch({ type: "openSearch" })}></i>
        </div>
      </header>
    </>
  )
}

export default Header
