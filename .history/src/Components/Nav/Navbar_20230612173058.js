import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import Logo from '@/assets/nav/logo.svg'

function Navbar() {
  return (
    <div>
        <Image src={Logo} alt="Logo" />
    </div>
  )
}

export default Navbar