import Header from "./Header"
import SearchOverlay from "./SearchOverlay"
import StateContext from "./StateContext"
import { useContext } from "react"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const appState = useContext(StateContext)
  return (
    <>
      <Header />
      {appState.isSearchOpen === true && <SearchOverlay />}
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
