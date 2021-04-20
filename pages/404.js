import React from "react";
import PageHead from "../components/Head/PageHead";
import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div className={styles.wrapper}>
      <PageHead title="Page Not Found" />
      <h1>404</h1>
      <h2>Page not Found</h2>
      <a href="/">Back to Home</a>
    </div>
  );
}
