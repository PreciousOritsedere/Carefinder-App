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
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 768 : true);


  //menu toggle
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  //check if screen is desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (typeof window !== "undefined") {
//         setIsDesktop(window.innerWidth >= 768);
//       }
//     };
//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", handleResize);
//     }
//     handleResize();

//     return () => {
//       if (typeof window !== "undefined") {
//         window.removeEventListener("resize", handleResize);
//       }
//     };
//   }, []);


  return (
    <nav className={styles.nav}>
      <Image src={Logo} alt="Logo" />
      <div>
        {isDesktop ? (
          <div className={styles.desktop_menu}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              {/* <li>Drugs</li> */}
              <li>Health</li>
              <li>Blog</li>
            </ul>
            <div className={styles.nav_signup}>
              <p>I have an health care </p>
              <button>Sign up</button>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={showMenu ? Cancel : Hamburger}
              alt="Menu"
              className={styles.hamburger}
              onClick={handleMenuToggle}
              width={30} // specify width
              height={30}
            />
            {showMenu ? <NavMenu /> : null}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
