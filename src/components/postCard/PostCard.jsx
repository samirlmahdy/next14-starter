import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            className={styles.img}
            fill
            alt="post image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link
          href={`/blog/${post.slug}`}
          className={styles.link}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
