"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/assets/nav/logo.svg";
import Hamburger from "@/assets/nav/hamburger.svg";
import Cancel from "@/assets/nav/cancel.svg";
import NavMenu from "@/Components/Nav_Menu/NavMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  //menu toggle
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  //check if screen is desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className={styles.nav}>
      <Image src={Logo} alt="Logo" />
      <div>
        {isDesktop ? (
          <div>Desktop</div>
        ) : (
          <>
            <Image
              src={showMenu ? Cancel : Hamburger}
              alt="Menu"
              className={styles.hamburger}
              onClick={handleMenuToggle}
            />
            {showMenu ? <NavMenu /> : null}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
