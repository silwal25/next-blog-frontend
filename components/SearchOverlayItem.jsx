import Link from "next/link"
import Grid from "./Grid"
import DispatchContext from "./DispatchContext"
import { useContext } from "react"

export default function SearchOverlayItem({ result }) {
  const appDispatch = useContext(DispatchContext)
  return (
    <div className="search-item">
      <Grid>
        {result.map((post) => (
          <div className="search-item__card">
            <Link href={`/post/${post.id}`}>
              <a>
                <div className="search-item__img">
                  <img src={post.hero[0].formats.thumbnail.url} alt="" className="search-item__img" />
                </div>
                <div className="search-item__body">
                  <h4 className="search-item__title">{post.title}</h4>
                  <span className="search-item__date">{post.published_at}</span>
                  <Link href={`/post/${post.id}`}>
                    <a className="search-item__link" onClick={() => appDispatch({ type: "closeSearch" })}>
                      Read More &rarr;
                    </a>
                  </Link>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  )
}
