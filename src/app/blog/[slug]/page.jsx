import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getData = async (postId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   if (!res.ok) throw new Error("Something went wrong!");
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug: postId } = params;

  const post = await getPost(postId);

  // const post = await getData(postId);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img}
          alt="hero image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src={post.img}
            alt="hero image"
            width={50}
            height={50}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.avatar}
          />

          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <p className={styles.desc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
