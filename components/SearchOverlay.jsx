import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import DispatchContext from "./DispatchContext"
import SearchOverlayItem from "./SearchOverlayItem"
import Axios from "axios"

const SearchOverlay = () => {
  const appDispatch = useContext(DispatchContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [result, setResult] = useState("")
  const [message, setMessage] = useState("")
  useEffect(() => {
    if (searchTerm.length >= 3) {
      const request = setTimeout(async () => {
        try {
          const res = await Axios.get(`https://nextjs-blog-backend.herokuapp.com/posts?title_contains=${searchTerm}`)
          setResult(res.data)
        } catch (e) {
          setResult(e)
        }
      }, 750)
      if (!Boolean(result.length)) {
        setMessage("0 results found")
      }
      return () => clearTimeout(request)
    }
  }, [searchTerm])
  return (
    <div className={"search__overlay"}>
      <span className="search__close" onClick={() => appDispatch({ type: "closeSearch" })}>
        <i class="fas fa-times"></i>
      </span>
      <div className="container">
        <input type="text" className="search__input" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="search__content">
          {!Boolean(result.length) && <h4>{message}</h4>}
          {Boolean(result.length) && <SearchOverlayItem result={result} />}
        </div>
      </div>
    </div>
  )
}
export default SearchOverlay
