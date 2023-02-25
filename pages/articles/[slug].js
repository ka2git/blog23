// pages/articles/[slug].tsx

import Head from 'next/head'
import styles from 'styles/styles.module.scss'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'


// import ConvertBody from 'components/convert-body'
// import PostCategories from 'components/post-categories'
// import Pagination from 'components/pagination'
// import Image from 'next/image'
// import { getPlaiceholder } from 'plaiceholder'


// import styles from '@/styles/Home.module.css'
import { getArticles, getArticleBySlug } from '@/lib/newt'
// import type { Article } from '@/types/article'

export default function Article({
  article,

}) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content="投稿詳細ページです" />
      </Head>
      <main className={styles.containerPost}>
        {/* <h1>{article.title}</h1> */}
        <PostHeader />
        <PostBody>
              {/* <ConvertBody contentHTML={content} /> */}          
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </PostBody>
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const articles = await getArticles()
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params, }) => {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  return {
    props: {
      article,
    },
  }
}




// import { getPostBySlug, getAllSlugs } from 'lib/api'
// import { extractText } from 'lib/extract-text'
// import { prevNextPost } from 'lib/prev-next-post'
// import Meta from 'components/meta'
// import Container from 'components/container'
// import PostHeader from 'components/post-header'
// import PostBody from 'components/post-body'
// import {
//   TwoColumn,
//   TwoColumnMain,
//   TwoColumnSidebar,
// } from 'components/two-column'
// import ConvertBody from 'components/convert-body'
// import PostCategories from 'components/post-categories'
// import Pagination from 'components/pagination'
// import Image from 'next/image'
// import { getPlaiceholder } from 'plaiceholder'

// // ローカルの代替アイキャッチ画像
// import { eyecatchLocal } from 'lib/constants'

// export default function Post({
//   title,
//   publish,
//   content,
//   eyecatch,
//   categories,
//   description,
//   prevPost,
//   nextPost,
// }) {
//   return (
//     <Container>
//       <Meta
//         pageTitle={title}
//         pageDesc={description}
//         pageImg={eyecatch.url}
//         pageImgW={eyecatch.width}
//         pageImgH={eyecatch.height}
//       />

//       <article>
//         <PostHeader title={title} subtitle="Blog Article" publish={publish} />

//         <figure>
//           <Image
//             key={eyecatch.url}
//             src={eyecatch.url}
//             alt=""
//             layout="responsive"
//             width={eyecatch.width}
//             height={eyecatch.height}
//             sizes="(min-width: 1152px) 1152px, 100vw"
//             priority
//             placeholder="blur"
//             blurDataURL={eyecatch.blurDataURL}
//           />
//         </figure>

//         <TwoColumn>
//           <TwoColumnMain>
//             <PostBody>
//               <ConvertBody contentHTML={content} />
//             </PostBody>
//           </TwoColumnMain>
//           <TwoColumnSidebar>
//             <PostCategories categories={categories} />
//           </TwoColumnSidebar>
//         </TwoColumn>

//         <Pagination
//           prevText={prevPost.title}
//           prevUrl={`/blog/${prevPost.slug}`}
//           nextText={nextPost.title}
//           nextUrl={`/blog/${nextPost.slug}`}
//         />
//       </article>
//     </Container>
//   )
// }

// export async function getStaticPaths() {
//   const allSlugs = await getAllSlugs()

//   return {
//     paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
//     fallback: false,
//   }
// }

// export async function getStaticProps(context) {
//   const slug = context.params.slug

//   const post = await getPostBySlug(slug)

//   const description = extractText(post.content)

//   const eyecatch = post.eyecatch ?? eyecatchLocal

//   const { base64 } = await getPlaiceholder(eyecatch.url)
//   eyecatch.blurDataURL = base64

//   const allSlugs = await getAllSlugs()
//   const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

//   return {
//     props: {
//       title: post.title,
//       publish: post.publishDate,
//       content: post.content,
//       eyecatch: eyecatch,
//       categories: post.categories,
//       description: description,
//       prevPost: prevPost,
//       nextPost: nextPost,
//     },
//   }
// }
