"use client";
import React from "react";
import {useState }  from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/assets/nav/logo.svg";
import Hamburger from "@/assets/nav/hamburger.svg";
import Cancel from "@/assets/nav/cancel.svg";
import NavMenu from "..";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.nav}>
      <Image src={Logo} alt="Logo" />
      {showMenu ? (
        <Image src={Cancel} alt="Menu" onClick={handleMenuToggle} />
      ) : (
        <Image src={Hamburger} alt="Menu" className={styles.hamburger} onClick={handleMenuToggle} />
      )}
      
      {showMenu ? <NavMenu /> : null}
    </nav>
  );
}

export default Navbar;
