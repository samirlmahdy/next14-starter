import { addPost, deletePost } from "@/lib/actions";
import React from "react";

const TestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input
          name="title"
          type="text"
          placeholder="title"
        />
        <input
          name="desc"
          type="text"
          placeholder="desc"
        />
        <input
          name="slug"
          type="text"
          placeholder="slug"
        />
        <input
          name="userId"
          type="text"
          placeholder="userId"
        />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input
          name="id"
          type="text"
          placeholder="id"
        />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default TestPage;
