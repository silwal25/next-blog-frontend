import Head from "next/head"
import Hero from "../components/Hero"
import Card from "../components/Cards"
import Grid from "../components/Grid"

export default function Home({ posts, featured }) {
  return (
    <>
      <div className="container">
        <Hero featuredPosts={posts} />
        <section className="latest-posts">
          <h2 className="heading-secondary">Latest Recipes!</h2>
          <Grid>
            {featured.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </Grid>
          <button className="btn">See more</button>
        </section>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(
    `http://next-blog_strapi_1:1337/posts?featured=true&_sort=published_at:desc&_limit=3`
  )
  const posts = await res.json()
  const featuredRes = await fetch(
    `http://next-blog_strapi_1:1337/posts?_sort=published_at:DESC&_limit=6`
  )
  const featured = await featuredRes.json()
  return {
    props: {
      posts,
      featured
    }
  }
}
