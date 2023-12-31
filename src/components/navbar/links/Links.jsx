"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import MenuIcon from "../../../../public/menu.png";
import Image from "next/image";
const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <NavLink
              item={link}
              key={link.title}
            />
          );
        })}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ path: "/login", title: "Login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.mobileBtn}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink
              item={link}
              key={link.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
