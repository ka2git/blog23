import Link from 'next/link'
import styles from 'styles/styles.module.scss'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>

                <div className={styles.footerInner}>
                    <div>
                        Logo
                    </div>
                    <ul className={styles.footerNav}>
                        <li>
                            <Link href="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                CATEGORY
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerCopyright}>
                    &copy; BLOG23 All rights reserved.
                </div>

            </footer>

        </>
    )
}