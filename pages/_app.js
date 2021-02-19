import { useImmerReducer } from "use-immer"

import Layout from "../components/Layout"
import StateContext from "../components/StateContext"
import DispatchContext from "../components/DispatchContext"
import Axios from "axios"
Axios.defaults.baseURL = "https://desolate-castle-84067.herokuapp.com"

import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  const initialState = {
    isSearchOpen: false
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "openSearch":
        console.log(draft.isSearchOpen)
        draft.isSearchOpen = true
        return
      case "closeSearch":
        draft.isSearchOpen = false
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default MyApp
