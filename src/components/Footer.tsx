import React from "react";
import styles from "@/styles/Footer/Footer.module.css";

export default function Footer() {
  const date = new Date();
  return (
    <div className={styles.footer}>
      &copy; Integrity Tech LLC {date.getFullYear()}
    </div>
  );
}
