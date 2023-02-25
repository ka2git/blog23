// header.js footer.js layout.js はpages/_app.jsカスタムAppコンポーネントで全ページに読み込んでいます。
import styles from "styles/styles.module.scss"
import Hero from "components/hero"

import Head from 'next/head'
import Link from 'next/link'
import { getArticles } from '@/lib/newt'
// import type { Article } from '@/types/article'

// export default function Home() {
//   return (
//     <div className={styles.containerMain}>
//       <Hero />


//     </div>
//   )
// }


export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Newt・Next.jsブログ</title>
        <meta name="description" content="NewtとNext.jsを利用したブログです" />
      </Head>
      <main>
        <div className ={styles.containerMain}>
          <Hero />

          <ul>
            {articles.map((article) => {
              return (
                <li key={article._id}>
                  <Link href={`articles/${article.slug}`}>{article.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()
  return {
    props: {
      articles,
    },
  }
}