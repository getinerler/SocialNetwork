import { Post } from '@shared/models/Post';
import { UserLike } from '@shared/models/userLike';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function PostCard({ post, likes }: { post: Post; likes: UserLike[] }) {
  return (
    <>
    <div className="post" onClick={() => getDetail(post.userId)}>
        (post.isReposted && <div className="repost-div">
            <FontAwesomeIcon icon={faRetweet} />
            by {post.repostedFirstName} {post.repostedLastName}
        </div>)

        <div className="post-header">
            <div style={{ display: "flex" }}>
            <a onClick={() => getProfile(event, post.userId)}><img src="{{post.photo}}" alt="Profile Picture"/></a>
            <h4>{post.firstName} {post.lastName}
                <span style={{ fontSize: "18px", color: "grey" }}>@{post.username}</span>
                <span style={{ fontSize: "16px", color: "grey" }}>&nbsp;&nbsp;{post.date.toString()}</span>
                
            </h4>
            </div>
            <div onClick={() => deletePost(post.postId)}>

            </div>
        </div>

        <div className="post-content">
            <p>{post.text}</p>
        </div>
        <div className="post-counts">

            <div className="post-counts-item">
            <span>
                <FontAwesomeIcon icon={faComment} />
                {post.commentCount}
            </span>
            </div>

            <div className="post-counts-item">
            <span onClick={() => repostPost(post.postId)} className={post.reposted ? "reposted" : ""}>
                <FontAwesomeIcon icon={faRetweet} />
                &nbsp;<a className="count" onClick={() => showReposts(post.postId)}>{post.retweetCount}</a>
            </span>
            </div>

            <div className="post-counts-item">
            <span onClick={() => likePost(post.postId)}  className="{reposted:post.liked}">
                {post.liked ? <FontAwesomeIcon icon={faHeart} /> : ""}
                &nbsp;<a className="count" onClick={()=>showLikes(post.postId)}>{post.likeCount}</a>
            </span>
            </div>
        </div>

        {post.comments && post.comments.length > 0 && (
            <div>

            {post.comments.map((comment, index) => (
                <div className="comment">
                    <div className="comment-header">
                        <img src="{{comment.photo}}" alt="Profile Picture"/>

                        <div>
                        <h4>{comment.firstName} {comment.lastName}</h4>
                        <h6 style={{color:"grey"}}>@{comment.username}</h6>
                        </div>
                    </div>

                    <div className="comment-content">
                        <p>{comment.text}</p>
                    </div>
                    <div className="comment-counts">

                        <div className="post-counts-item">
                        <span onClick={() => getDetail(post.postId)}>
                            <FontAwesomeIcon icon={faComment} />
                            {post.commentCount}
                        </span>
                        </div>

                        <div className="post-counts-item">
                        <span onClick={() => repostPost(post.postId)} className={post.reposted ? "reposted" : ""}>
                            <FontAwesomeIcon icon={faRetweet} />
                            {post.retweetCount}
                        </span>
                        </div>
                    
                        <div className="post-counts-item">
                        <span onClick={() => likePost(post.postId)} className={post.liked ? "liked" : ""}>
                            {post.liked ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeart} />}
                            {post.likeCount}
                        </span>
                        </div>
                    </div>
                </div>
            ))}
           
            </div>
        )}
        </div>

        {likes.length > 0 && (
            <div id="list-container" className="list-container">
                {likes.map((like, index) => (
                    <div className="list-container-element">
                        <img style={{ width: "20px" }} src="{{like.photoPath}}" />
                        <b>{like.firstName} {like.lastName}</b> (@{like.username})
                    </div>
                ))}
      
            </div>
        )}
    </>
);
function likePost(postId: number) {

}

function showLikes(postId: number) {

}

function repostPost(postId: number) {

}

function getDetail(userId: number) {

}

function deletePost(postId: number) {

}

function showReposts(postId: number) {

}

function repostPosts(postId: number) {

}

function getProfile(event: any, userId: number) {

}
}
