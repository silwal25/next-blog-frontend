import CategoryMenu from "../../components/CategoryMenu"
import Grid from "../../components/Grid"
import Card from "../../components/Cards"

export default function index({ data }) {
  console.log(data)
  return (
    <div className="single-category">
      <div className="container">
        <div className="category-menu">
          <CategoryMenu />
        </div>
        <div className="category-content">
          <h1 className="heading-secondary category-content__title">
            {data[0].category}
          </h1>
          <Grid>
            {data[0].posts.map((post) => (
              <Card post={post} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://strapi:1337/categories?category_contains=${context.params.slug}`
  )
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(`http://strapi:1337/categories`)
  const data = await res.json()
  const paths = data.map((category) => ({
    params: { slug: category.category }
  }))
  return {
    paths,
    fallback: false
  }
}
