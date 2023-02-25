import Head from 'next/head'
import styles from 'styles/styles.module.scss'
import PageTitle from 'components/page-title'
import PostBody from 'components/post-body'
// header.js footer.js layout.js はpages/_app.jsカスタムAppコンポーネントで全ページに読み込んでいます。

export default function About() {
  return (
    <>
      <div className={styles.containerPost}>
        <PageTitle
          title="About"
          subtitle="About this blog"
          imageOn
        />

        <PostBody>
          <div>
            <h2>これは見出し2です。</h2>
            <p>
              ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。
            </p>

            <h3>これは見出し3です。</h3>
            <p>
              ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。
            </p>

            <h4>これは見出し4です。</h4>
            <p>
              ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。
            </p>

            <h5>これは見出し5です。</h5>
            <p>
              ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。
            </p>

            <h6>これは見出し6です。</h6>
            <p>
              ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。ここにAboutページの文章が入ります。カタカナなども含んだ自然な形の文章のほうが、良い見栄えになるかもしれません。
            </p>

            <table className={styles.tableBase}>
              <thead>
                <tr><th>お肉</th><th>野菜</th></tr>
              </thead>
              <tbody>
                <tr><td>豚肉</td><td>にんじん</td></tr>
                <tr><td>牛肉</td><td>玉ねぎ</td></tr>
                <tr><td>鶏肉</td><td>白菜</td></tr>
                <tr><td>鹿肉</td><td>じゃがいも</td></tr>
              </tbody>
            </table>

            <table className={styles.tableBase}>
              <thead>
                <tr><th>OS</th><td>MacOS Sierra</td><td>MacOS Ventura</td></tr>
              </thead>
              <tbody>
                <tr><th>メモリ</th><td>8GB</td><td>16GB</td></tr>
                <tr><th>ストレージ</th><td>256B</td><td>512GB</td></tr>
              </tbody>
            </table>

            <ul className={styles.ulBase}>
              <li>ぶなしめじ</li>
              <li>まいたけ</li>
              <li>しいたけ</li>
            </ul>

            <div className={`${styles.bGray} ${styles.radiusXs} ${styles.pMd}`}>
              <ul className={styles.ulBase}>
                <li>ぶなしめじ</li>
                <li>まいたけ</li>
                <li>しいたけ</li>
              </ul>
            </div>

            </div>
        </PostBody>
      </div>
    </>
  )
}