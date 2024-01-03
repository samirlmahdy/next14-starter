"use server";

import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    console.log("Saved to db");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from db");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  "use server";
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) return "Password doesn't match";
  const user = await User.findOne({ email });
  if (user) return "User already exists";

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("Saved to DB");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

// export const login = async (formData) => {
//   "use server";
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", {
//       username,
//       password,
//     });
//   } catch (error) {
//     console.log(error);
//     throw new Error("Something went wrong");
//   }
// };

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
    console.log("Logged in");
  } catch (error) {
    console.log(error);
  }
};
