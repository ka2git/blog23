import styles from 'styles/styles.module.scss'
import Header from 'components/header'
import Footer from 'components/footer'

import { Main } from 'next/document'


export default function Layout({ children }) {
    return (
        <>
            <Header />

            <main>
                <div className={styles.pxMd}>
                    {children}
                </div>
            </main>

            <Footer />
        </>
    )
}
