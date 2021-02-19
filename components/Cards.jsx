import Link from "next/link"

const Cards = (post) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  let date = new Date(post.post.published_at).toLocaleDateString("en-US", options)
  return (
    <div className="card">
      <div className="card__img">
        <img src={`${process.env.BACKEND_URL}${post.post.hero[0].formats.medium.url}`} alt={post.post.title} />
      </div>
      <div className="card__body">
        <span className="card__date">{date.toString()}</span>
        <h4 className="card__title">{post.post.title}</h4>
        <p className="card__excerpt">{post.post.content.slice(0, 200)}...</p>
        <Link href={`/post/${post.post.id}`}>
          <a className="card__link">Read more >></a>
        </Link>
      </div>
    </div>
  )
}
export default Cards
