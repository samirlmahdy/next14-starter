import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lamadev</div>
      <p className={styles.text}>
        lama creative thoughts agency. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
