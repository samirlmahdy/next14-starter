import PostCard from "@/components/postCard/PostCard";
import React from "react";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  // GET DATA WITH AN API

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Something went wrong!");
    console.log("Rendered");

    return res.json();
  };

  const posts = await getData();

  // //GET DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
