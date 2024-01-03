import React from "react";
import styles from "./registerForm.module.css";
import { register } from "@/lib/actions";

const RegisterForm = () => {
  return (
    <form
      className={styles.form}
      action={register}
    >
      <input
        className={styles.input}
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="email"
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        className={styles.input}
        type="password"
        name="passwordRepeat"
        placeholder="Repeat password"
      />
      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default RegisterForm;
