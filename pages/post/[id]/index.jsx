import Axios from "axios"
import Comment from "../../../components/Comment"
import SimilarPosts from "../../../components/SimilarPosts"
import ReactMarkdown from "react-markdown"

const Post = ({ post, imageURL }) => {
  console.log(post[0].hero[0].formats.large.url)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  const date = new Date(post[0].published_at).toLocaleDateString("en-US", options)
  const postComment = async (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      comment: e.target.comment.value,
      post: {
        id: post[0].id
      }
    }
    try {
      const res = await Axios.post(`${process.env.BACKEND_URL}/comments`, data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="single-post">
      <div className="container">
        <div className="single-post--left">
          <h1 className="heading-secondary">{post[0].title}</h1>
          <span className="single-post__by-line">
            by {post[0].author.name} | <span className="single-post__date">{date}</span>
          </span>
          <img src={post[0].hero[0].formats.large.url} alt="" className="single-post__img" />
          <div className="single-post__content">
            <ReactMarkdown source={post[0].content} />
            {/**<ReactMarkdown source={post[0].summary} className="single-post__summary" /> */}
          </div>
          <div className="comment-form">
            <h2 className="heading-secondary">Leave a comment</h2>
            <div className="single-post__comment-form">
              <form onSubmit={postComment} className="form">
                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>
                <div className="form__group">
                  <input type="email" className="form__input" placeholder="Email" id="email" required />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>
                <div className="form__group">
                  <textarea id="comment" className="form__input" placeholder="Message" cols="30" rows="10" required></textarea>
                  <label htmlFor="comment" className="form__label">
                    Message
                  </label>
                </div>
                <button className="btn form__button">Submit</button>
              </form>
            </div>
          </div>
          <div className="single-post__comment-section">
            <Comment comments={post[0].comments} />
          </div>
        </div>
        <div className="single-post--right">
          <SimilarPosts category={post[0].categories.map((category) => category.category)} id={post[0].id} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.BACKEND_URL}/posts?id=${context.params.id}`)
  const post = await res.json()
  const imageURL = `${process.env.BACKEND_URL}${post[0].hero[0].formats.large.url}`
  return {
    props: {
      post,
      imageURL
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BACKEND_URL}/posts`)
  const posts = await res.json()
  const ids = posts.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  return {
    paths,
    fallback: false
  }
}
export default Post
