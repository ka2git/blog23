import '@/styles/_globals.scss'
import '@/styles/styles.module.scss'

import Layout from 'components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp