import Axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function CategoryMenu() {
  const [data, setData] = useState([])
  useEffect(async () => {
    try {
      const res = await Axios.get(`${process.env.BACKEND_URL}/categories`)
      const data = res.data
      setData(data.map((category) => category.category))
    } catch (e) {
      console.log(e)
    }
  }, [])
  return (
    <>
      <h2 className="heading-tertiary">All Categories</h2>
      <ul className="category-list">
        {data.map((category) => (
          <li>
            <Link href={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
