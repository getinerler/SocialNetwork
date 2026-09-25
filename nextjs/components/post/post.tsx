import { Post } from '@shared/models/Post';
import { UserLike } from '@shared/models/userLike';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './post.module.css';

export default function PostCard({ post, likes }: { post: Post; likes: UserLike[] }) {
  return (
    <>
    <div className={styles.post} onClick={() => getDetail(post.userId)}>
    {post.isReposted && <div className={styles.repostDiv}>
            <FontAwesomeIcon icon={faRetweet} />
            by {post.repostedFirstName} {post.repostedLastName}
        </div>}

        <div className={styles.postHeader}>
            <div style={{ display: "flex" }}>
            <a onClick={() => getProfile(event, post.userId)}><img src={post.photo} className={styles.postHeaderImg} alt="Profile Picture"/></a>
            <h4>{post.firstName} {post.lastName}
                <span style={{ fontSize: "18px", color: "grey" }}>@{post.username}</span>
                <span style={{ fontSize: "16px", color: "grey" }}>&nbsp;&nbsp;{(() => { const date = new Date(post.date); return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`; })()}</span>         
            </h4>
            </div>
            <div onClick={() => deletePost(post.postId)}>

            </div>
        </div>

        <div className={styles.postContent}>
            <p>{post.text}</p>
        </div>
        
        <div className={styles.postCounts}>
            <div className={styles.postCountsItem}>
                <span>
                    <FontAwesomeIcon icon={faComment} />
                    {post.commentCount}
                </span>
            </div>

            <div className={styles.postCountsItem}>
                <span onClick={() => repostPost(post.postId)} className={post.reposted ? styles.reposted : ""}>
                    <FontAwesomeIcon icon={faRetweet} />
                    &nbsp;<a className={styles.count} onClick={() => showReposts(post.postId)}>{post.retweetCount}</a>
                </span>
            </div>

            <div className={styles.postCountsItem}>
                <span onClick={() => likePost(post.postId)}  className={post.liked ? styles.liked : ""}>
                    {post.liked ? <FontAwesomeIcon icon={faHeart} /> : ""}
                    &nbsp;<a className={styles.count} onClick={()=>showLikes(post.postId)}>{post.likeCount}</a>
                </span>
            </div>
        </div>

        {post.comments && post.comments.length > 0 && (
            <div>

            {post.comments.map((comment, index) => (
                <div className={styles.comment}>
                    <div className={styles.commentHeader}>
                        <img src="{{comment.photo}}" alt="Profile Picture"/>

                        <div>
                        <h4>{comment.firstName} {comment.lastName}</h4>
                        <h6 style={{color:"grey"}}>@{comment.username}</h6>
                        </div>
                    </div>

                    <div className={styles.commentContent}>
                        <p>{comment.text}</p>
                    </div>
                    <div className={styles.commentCounts}>

                        <div className={styles.postCountsItem}>
                        <span onClick={() => getDetail(post.postId)}>
                            <FontAwesomeIcon icon={faComment} />
                            {post.commentCount}
                        </span>
                        </div>

                        <div className={styles.postCountsItem}>
                        <span onClick={() => repostPost(post.postId)} className={post.reposted ? styles.reposted : ""}>
                            <FontAwesomeIcon icon={faRetweet} />
                            {post.retweetCount}
                        </span>
                        </div>
                    
                        <div className={styles.postCountsItem}>
                        <span onClick={() => likePost(post.postId)} className={post.liked ? styles.liked : ""}>
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
            <div id="list-container" className={styles.listContainer}>
                {likes.map((like, index) => (
                    <div className={styles.listContainerElement}>
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
