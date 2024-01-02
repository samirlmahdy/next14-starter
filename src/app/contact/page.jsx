import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Name and Surname"
          />
          <input
            placeholder="Email"
            type="email"
          />
          <input
            type="phone"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            placeholder="Message"
            rows="10"
            cols="30"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
