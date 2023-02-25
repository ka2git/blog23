{
  /* About / Blog のページ見出し部分を定義しています */
}
import styles from 'styles/page-head.module.scss'
// import Image from 'next/image'
// import cube from 'images/cube.jpg'

export default function PageHead({ title, subtitle }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {/* {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )} */}
    </div>
  )
}
