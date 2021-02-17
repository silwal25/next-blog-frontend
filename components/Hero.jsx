import Link from "next/link"

const Hero = ({ featuredPosts }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  let i = 0
  const dates = featuredPosts.map(() => new Date(featuredPosts[i++].published_at).toLocaleDateString("en-US", options))
  console.log(dates)
  return (
    <div className="hero">
      <div className="hero__left">
        <img src={`https://nextjs-blog-backend.herokuapp.com${featuredPosts[0].hero[0].formats.large.url}`} alt={featuredPosts[0].title} className="hero__img" />
        <Link href={`/post/${featuredPosts[0].id}`}>
          <a className="hero__link">
            <div className="hero__content-box">
              <span className="hero__tag">{featuredPosts[0].categories[0].category}</span>
              <h2 className="heading-secondary">{featuredPosts[0].title}</h2>
              <span className="hero__post-author">{featuredPosts[0].author.name}</span>
              <span className="hero__post-date">{dates[0]}</span>
            </div>
          </a>
        </Link>
      </div>
      <div className="hero__right">
        <div className="hero__right--1">
          <img src={`https://nextjs-blog-backend.herokuapp.com${featuredPosts[1].hero[0].formats.medium.url}`} alt={featuredPosts[1].title} className="hero__img" />
          <Link href={`/post/${featuredPosts[1].id}`}>
            <a className="hero__link">
              <div className="hero__content-box">
                <span className="hero__tag">{featuredPosts[1].categories[0].category}</span>
                <h2 className="heading-secondary">{featuredPosts[1].title}</h2>
                <span className="hero__post-author">{featuredPosts[1].author.name}</span>
                <span className="hero__post-date">{dates[1]}</span>
              </div>
            </a>
          </Link>
        </div>
        <div className="hero__right--2">
          <img src={`https://nextjs-blog-backend.herokuapp.com${featuredPosts[2].hero[0].formats.medium.url}`} alt={featuredPosts[2].title} className="hero__img" />
          <Link href={`/post/${featuredPosts[2].id}`}>
            <a className="hero__link">
              <div className="hero__content-box">
                <span className="hero__tag">{featuredPosts[2].categories[0].category}</span>
                <h2 className="heading-secondary">{featuredPosts[2].title}</h2>
                <span className="hero__post-author">{featuredPosts[2].author.name}</span>
                <span className="hero__post-date">{dates[2]}</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Hero
