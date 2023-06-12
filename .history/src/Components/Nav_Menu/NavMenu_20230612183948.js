import React from "react";
import styles from "./Nav.module.css";

function NavMenu() {
  return (
    <div className={styles.}>
      <h3>About Us</h3>
      <h3>Drugs</h3>
      <h3>Health Centres</h3>
      <h3> Blog</h3>
    </div>
  );
}

export default NavMenu;
