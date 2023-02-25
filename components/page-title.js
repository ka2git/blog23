// 固定ページのタイトルに使用

import Image from 'next/image'
import styles from 'styles/styles.module.scss'

export default function PageTitle({ title, subtitle, imageOn = false }) {
    return (
        <>
            <h1 className={styles.pageTitle}>{title}</h1>
            <div className={styles.pageSubTitle}>{subtitle}</div>
            {imageOn && 
                <figure className={styles.pageHeroImageContainer}>
                    <Image
                        src="/hero/cafe01.jpg"
                        alt=""
                        layout="fill"
                        objectfit="cover"
                        priority
                    />
                </figure>
            }
        </>
    )
}
