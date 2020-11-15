import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = (props) => {
  const { posts } = props;

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} className={styles.post} {...post} />;
      })}
    </div>
  );
};

export default PostList;
