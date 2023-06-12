import React from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/assets/nav/logo.svg";
import Hamburger from "@/assets/nav/hamburger.svg";
import Cancel from "@/assets/nav/cancel.svg";
import NavMenu from "../Nav_Menu/NavMenu";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Image src={Logo} alt="Logo" />
      <Image src={Hamburger} alt="Menu" />
      <Image src={Cancel} alt="Menu" />
        <NavMenu />
    </nav>
  );
}

export default Navbar;
