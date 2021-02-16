import { useEffect } from "react"
import md5 from "md5"

export default function SingleComment({ comment }) {
  const userEmail = comment.email.trim().toLowerCase()
  const gravatarURL = `https://gravatar.com/avatar/${md5(userEmail)}?s=128`

  return (
    <div className="single-comment-card">
      <div className="single-comment-card--left">
        <img src={gravatarURL} alt={comment.name} />
      </div>
      <div className="single-comment-card--right">
        <h4 className="heading-tertiary">{comment.name}</h4>
        <p className="comment__user-comment">{comment.comment}</p>
      </div>
    </div>
  )
}
