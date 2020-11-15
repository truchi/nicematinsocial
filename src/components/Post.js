import styles from "./Post.module.css";

const Post = (props) => {
  const {
    id,
    bContent: content,
    createdAt,
    numLikes,
    userByUserId: user,
    youLiked: liked,
  } = props;
  const { icon, name } = user;

  return (
    <div className={styles.post}>
      <div className={styles.user}>
        <div
          className={styles.icon}
          style={{
            backgroundImage: `url("${icon}")`,
          }}
        ></div>
        {name}
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Post;
