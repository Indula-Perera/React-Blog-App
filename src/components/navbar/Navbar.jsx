import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AulthLink from '../aulthLink/AulthLink'
import ThemeToggle from '../themeToggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
      
      <div className={styles.logo}>The Cyber Blog</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link}> Home </Link>
        <Link href="http://localhost:8501/" className={styles.link}> Check URL </Link>
        <Link href="/" className={styles.link}> Contact </Link>
        <Link href="/" className={styles.link}> About </Link>
        <AulthLink/>
      </div>
      
    </div>
  )
}

export default Navbar
