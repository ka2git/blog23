import Link from 'next/link'
import styles from 'styles/styles.module.scss'
import Nav from 'components/nav'

export default function Header() {
    return (
        <>
            <header>
                <div className={styles.headerInner}>
                    <div>
                        <Link href="/">
                            Logo
                        </Link>
                    </div>

                    <Nav />
                    
                </div>
            </header>
        </>
    )
}