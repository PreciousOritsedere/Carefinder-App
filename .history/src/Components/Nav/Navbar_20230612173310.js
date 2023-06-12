import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import Logo from '@/assets/nav/logo.svg'
import Hamburger from '@/assets/nav/hamburger.svg'

function Navbar() {
  return (
    <nav>
        <Image src={Logo} alt="Logo" />
        <Image src={Hamburger} alt="Menu" />

    </nav>
  )
}

export default Navbar