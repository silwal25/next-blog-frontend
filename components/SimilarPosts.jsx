import Axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

import SearchOverlayItem from "./SearchOverlayItem"

export default function SimilarPosts({ category, id }) {
  const [data, setData] = useState([])
  useEffect(async () => {
    try {
      const res = await Axios.get(`/posts?${category.map((category) => `categories.category_contains=${category}&`).join("")}id_ne=${id}&_limit=5`)
      setData(res.data)
    } catch (e) {
      console.log(e)
    }
  }, [])
  return (
    <div>
      <h2 className="heading-tertiary">Similar Recipes!</h2>
      {data.map((data) => (
        <div className="similar-post-item">
          <Link href={`/post/${data.id}`}>
            <a>
              <div className="similar-post-item--left">
                <img src={data.hero[0].formats.thumbnail.url} alt={data.title} />
              </div>
              <div className="similar-post-item--right">
                <h4 className="heading-quaternary">{data.title}</h4>
                <span className="similar-post-item__by">by {data.author.name}</span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
