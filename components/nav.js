import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/styles.module.scss'

export default function Nav() {

    const [navIsOpen, setNavIsOpen] = useState(false)
    
    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav = () => {
        setNavIsOpen(false)
    }

    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                    @media (max-width: 743px) {
                        body {
                            overflow: hidden;
                            position: fixed;
                            width: 100%;
                        }
                    }  
                `}
                </style>
            )}

            <button className={styles.headerNavButton} onClick={toggleNav}>
                <span className={styles.centerBar}></span>
                <span className={styles.srOnly}>MENU</span>
            </button>

            <ul className={styles.headerNav}>
                <li>
                    <Link href="/" onClick={closeNav}>HOME</Link>
                </li>

                <li>
                    <Link href="./about" onClick={closeNav}>ABOUT</Link>
                </li>

                <li>
                    <Link href="/" onClick={closeNav}>CATEGORY</Link>
                </li>

                <li>
                    <Link href="/" onClick={closeNav}>CONTACT</Link>
                </li>
            </ul>
    </nav>
    )
}