import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import Logo from '@/assets/nav/logo.svg'
import Hamburger from ''

function Navbar() {
  return (
    <nav>
        <Image src={Logo} alt="Logo" />

    </nav>
  )
}

export default Navbar