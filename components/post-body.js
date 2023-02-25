import styles from 'styles/styles.module.scss'
// import Header from 'components/header'
// import Footer from 'components/footer'

// import { Main } from 'next/document'

export default function PostBody({ children }) {
    return (
        <>
            <div className={styles.postBody}>
                {children}
            </div>
        </>
    )
}
