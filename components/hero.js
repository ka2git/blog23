import Image from 'next/image'
import styles from 'styles/styles.module.scss'

export default function Hero() {
    return (
        <div className={styles.containerMain}>
            <div className={styles.siteHeroImageContainer}>
                <Image
                    src="/hero/cafe02.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    // width={1024}
                    // height={682}
                    priority
                />
            </div>
            <p className={`
                ${styles.textCenter} 
                ${styles.mtLg} 
            `}>
                とっておきの美味しいコーヒーのお店を<br />
                紹介するブログです。
            </p>
        </div>
    )
}
