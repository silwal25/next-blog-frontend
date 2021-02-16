import SingleComment from "./SingleComment"

const Comment = ({ comments }) => {
  return (
    <div className="comment">
      <h2 className="comment-heading">{comments.length} Comments</h2>
      {comments.map((comment) => (
        <SingleComment comment={comment} />
      ))}
    </div>
  )
}
export default Comment
