// lib/newt.js

import { createClient } from 'newt-client-js'

// CDN APIを利用するためのAPIクライアントを作成する
const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

// 投稿一覧の取得メソッドを作成する
export const getArticles = async () => {
   const { items } = await client.getContents({
     appUid: 'blog',
     modelUid: 'article',
     query: {
      // select: ['_id', 'title', 'slug', 'body'],
       select: ['_id', 'title', 'slug', 'body', 'categories', 'tags'],
     },
   })
   return items
}

// 投稿詳細の取得メソッドを作成する
export const getArticleBySlug = async (slug) => {
   const article = await client.getFirstContent({
     appUid: 'blog',
     modelUid: 'article',
     query: {
       slug,
      //  select: ['_id', 'title', 'slug', 'body'],
       select: ['_id', 'title', 'slug', 'body', 'categories', 'tags'],
     },
   })
   return article
}